# Preisdent

<detail>
<summary>
  Javascript Usage
</summary>
  
  ```js
const DIG = require("dig.js")
const {AttachmentBuilder} = require("discord.js")
  async function getPresident(avatar) {

  const img = await new DIG.President().getImage(avatar)

  const attch = new AttachmentBuilder(img).setName("president.png")

  message.reply({
  files: [
attach
  ]
  })
  }
  ```
</detail>

<detail>
<summary>
  Typescript Usage
</summary>
  
  ```js
import DIG from "dig.js"
import {AttachmentBuilder} from "discord.js"
  async function getPresident(avatar) {

  const img = await new DIG.President().getImage(avatar)

  const attch = new AttachmentBuilder(img).setName("president.png")

  message.reply({
  files: [
attach
  ]
  })
  }
  ```
</detail>
