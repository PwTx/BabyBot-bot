const stickermaker = (prefix, botName, ownerName) => {
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
◪ *CRIAÇÃO DE STICKER*
  │
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  └─ ❏ ${prefix}ttp
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
exports.stickermaker = stickermaker
