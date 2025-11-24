const Jimp = require("jimp");

class GoodbyeCard {
    constructor() {
        this.server = null;
        this.name = null;
        this.avatar = null;
        this.color = "violet";
        this.path = "https://raw.githubusercontent.com/mario1842/mariocard/main/bg.png";
        this.text = "Member left the server!";
        this.is_rounded = false;
    }

    async create() {
        // Load background
        const bg = await Jimp.read(this.path);
        bg.resize(900, 300);

        // Load avatar
        if (this.avatar) {
            let avatar = await Jimp.read(this.avatar);
            avatar.resize(150, 150);

            if (this.is_rounded) avatar.circle();

            bg.composite(avatar, 30, 75);
        }

        // Load fonts
        const font40 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        const font30white = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);

        // Title text
        bg.print(font40, 200, 35, this.text);

        // Line
        bg.scan(275, 85, 500, 4, (x, y, idx) => {
            const hex = Jimp.cssColorToHex(this.color);
            bg.bitmap.data[idx + 0] = (hex >> 24) & 255;
            bg.bitmap.data[idx + 1] = (hex >> 16) & 255;
            bg.bitmap.data[idx + 2] = (hex >> 8) & 255;
            bg.bitmap.data[idx + 3] = 255;
        });

        // Server label
        bg.print(font40, 200, 120, "Server:");
        bg.print(font40, 345, 115, this.server || "Unknown");

        // Former user
        bg.print(font40, 200, 180, "Former User:");
        bg.print(font40, 455, 178, this.name || "Unknown");

        return await bg.getBufferAsync(Jimp.MIME_PNG);
    }
}

module.exports = GoodbyeCard;
