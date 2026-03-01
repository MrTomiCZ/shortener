//const shortio = require("short.io")
import shortio from "short.io";
const short = new shortio("mtmi.eu", 1303009, process.env.SHORTIO);

function generateId(length = 6) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = ""

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return result
}

export default async function handler(req, res) {
    const link = await short.createLink({
        originalURL: req.query.url,
        title: "Shortened By bam",
        path: "P-"+req.query.short || "P-"+generateId()
    });
    res.send(link.shortURL);
}
