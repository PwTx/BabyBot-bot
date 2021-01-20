const imagemaker = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Criador: ${ownerName}
◪ *INFO*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *CRIAÇÃO DE IMAGEM*
  │
  ├─ ❏ ${prefix}bpink
  ├─ ❏ ${prefix}snowwrite
  ├─ ❏ ${prefix}3dtext
  ├─ ❏ ${prefix}firetext
  ├─ ❏ ${prefix}glitch
  ├─ ❏ ${prefix}shadow
  ├─ ❏ ${prefix}burnpaper
  ├─ ❏ ${prefix}coffee
  ├─ ❏ ${prefix}lovepaper
  ├─ ❏ ${prefix}woodblock
  ├─ ❏ ${prefix}qowheart
  ├─ ❏ ${prefix}mutgrass
  ├─ ❏ ${prefix}undergocean
  ├─ ❏ ${prefix}woodenboards
  ├─ ❏ ${prefix}wolfmetal
  ├─ ❏ ${prefix}metalictglow
  ├─ ❏ ${prefix}8bit
  └─ ❏ ${prefix}quotemaker
◪ *OUTROS*
  │
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}virtex
  ├─ ❏ ${prefix}exe
  ├─ ❏ ${prefix}qrcode
  ├─ ❏ ${prefix}afk
  ├─ ❏ ${prefix}timer
  ├─ ❏ ${prefix}fml
  └─ ❏ ${prefix}fml2
◪ *${ownerName}*`
}
exports.imagemaker = imagemaker
