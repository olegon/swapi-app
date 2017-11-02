module.exports = function (db) {
    return {
        insert: function ({
            id,
            release_date = null,
            director = null,
            title = null,
            edited = null,
            producer = null,
            episode_id = null,
            created = null,
            opening_crawl = null
        }) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into films (id, release_date, director, title, edited, producer, episode_id, created, opening_crawl)
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?);
                `,
                [id, release_date, director, title, edited, producer, episode_id, created, opening_crawl],
                function (err) {
                    if (err) return rej(err);
                    
                    res();
                });
            });
        },
        list: function () {
            return new Promise((res, rej) => {
                db.all(`
                    select id, release_date, director, title, edited, producer, episode_id, created, opening_crawl
                    from films;
                `, [], function (err, rows) {
                    if (err) return rej(err);

                    res(rows);
                });
            });
        }
    }
};