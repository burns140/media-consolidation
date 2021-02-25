import { plainToClass } from 'class-transformer';
import express from 'express'
import { Release } from '../../interfaces/release';
const config = require("../../config.json");
const Discogs = require("disconnect").Client;

const router = express.Router();

router.get("/", async (req, res) => {
    const me = new Discogs(config["USER-AGENT"], { userToken: config["DISCOGS-TOKEN"] });

    let db = me.database();
    let release = await db.getRelease(16378959);
    let artistString: string = "";

    release.artists.forEach(artist => {
        artistString += `${artist.name}, `
    });

    const classRelease: Release = plainToClass(Release, release);
    console.log('got release');
    res.send(classRelease);

    //res.send(release.thumb);
    //res.send(`<img src="${release.thumb}" >`)
    //res.send(release.artists);
});

module.exports = router;