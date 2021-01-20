const logomaker = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
◪ *INFO*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *CRIAÇÃO DE LOGO*
  │
  ├─ ❏ ${prefix}marvellogo
  ├─ ❏ ${prefix}ninjalogo
  ├─ ❏ ${prefix}logowolf
  ├─ ❏ ${prefix}logowolf2
  ├─ ❏ ${prefix}phlogo
  ├─ ❏ ${prefix}neonlogo
  ├─ ❏ ${prefix}neonlogo2
  ├─ ❏ ${prefix}lionlogo
  └─ ❏ ${prefix}jokerlogo
◪ *OUTROS*
  │
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}virtex
  ├─ ❏ ${prefix}qrcode
  ├─ ❏ ${prefix}timer
  ├─ ❏ ${prefix}fml
  └─ ❏ ${prefix}fml2
◪ *${ownerName}*`
}
exports.logomaker = logomaker
