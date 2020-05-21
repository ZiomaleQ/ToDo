module.exports = async () => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const sync = new FileSync(__dirname + '\\db\\data.json')
    const db = low(sync)

    await db.defaults({
        tables: [
            {
                defaults: {
                    data: [{
                        text: "To jest przykładowe zadanie!",
                        title: "Twoje pierwsze zadanie!",
                        position: 1,
                        finishAt: "notime"
                    }],
                    color: "theme",
                }
            }],
        finished: 0,
        money: 0,
        exp: 0,
        lvl: 0,
        unlocked: { colors: ["0x0", "0x1"], themes: ["0x0"] },
        achievment: ["0x0"],
        trashcan: [
            {
                title: "Twoje pierwsze usunięte zadanie!",
                text: "To przykładowe usunięte zadanie!",
                finishAt: "notime",
                deleteAt: "notime"
            }
        ],
        first: true,
    }
    ).write();
    return db;
}