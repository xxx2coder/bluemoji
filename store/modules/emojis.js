import axios from "axios";

export default {
    state: () => ({
        category: window.location.hash !== '' ? window.location.hash.replace('#', '') : 'Blue',
        emoji: {},
        emojis: []
    }),
    mutations: {
        setCategory(state, category) {
            state.category = category;
        },
        setEmoji(state, emoji) {
            state.emoji = emoji;
        },
        clearEmoji(state) {
            state.emoji = {}
        },
        setEmojis(state, emojis) {
            state.emojis = emojis;
        },
        updateEmojiInList(state, emoji) {
            let eIndex = state.emojis.findIndex((fEmoji) => fEmoji.id === emoji.id);
            state.emojis[eIndex] = emoji;
        }
    },
    actions: {
        toggleCategory(ctx, category) {
            ctx.commit('setCategory', category);
            ctx.dispatch('loadEmojis');
        },
        loadEmoji(ctx, hurl) {
            axios.get('/bluemoji.json')
                .then(response => {
                    let emoji = response.data
                        .filter((emoji) => emoji.hurl === hurl)
                        .map(emoji => {
                        return {
                            id: emoji.src,
                            hurl: emoji.hurl,
                            sizes: {
                                thumb: '/emoji/' + ctx.state.category + '/256/' + emoji.src + '.png',
                                full: '/emoji/' + ctx.state.category + '/' + emoji.src + '.png',
                            },
                            title: emoji.title,
                            desc: emoji.desc,
                            tags: emoji.tags,
                            loaded: false
                        }
                    });

                    ctx.commit('setEmoji', emoji[0]);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadEmojis(ctx) {
            axios.get('/bluemoji.json')
                .then(response => {
                    let emojis = response.data

                    if (ctx.state.emoji) {
                        emojis = emojis.filter((emoji) => emoji.src !== ctx.state.emoji.id);
                    }

                    emojis = emojis.map(emoji => {
                        return {
                            id: emoji.src,
                            hurl: emoji.hurl,
                            sizes: {
                                thumb: '/emoji/' + ctx.state.category + '/256/' + emoji.src + '.png',
                                full: '/emoji/' + ctx.state.category + '/' + emoji.src + '.png',
                            },
                            title: emoji.title,
                            desc: emoji.desc,
                            tags: emoji.tags,
                            loaded: false
                        }
                    });

                    ctx.commit('setEmojis', emojis);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    getters: {
        category(state) {
            return state.category;
        },
        emoji(state) {
            return state.emoji;
        },
        emojis(state) {
            return state.emojis;
        }
    }
};