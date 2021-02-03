exports.wait = () => {
	return`*「 AGRADE」 ESTA EM ANDAMENTO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING ATIVADO 😎*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING DESATIVADO 😔*`
}

exports.lvlnul = () => {
	return`* SEU NÍVEL AINDA ESTA VAZIO*`
}

exports.lvlnoon = () => {
	return`* O NÍVEL DO GRUPO NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*cara daftar ${prefix}daftar nome|idade* \n*contoh ${prefix}daftar Kakashi|00*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*sim falhou tente repetir mais alguns momentos*`
}

exports.linkga = () => {
	return`*desculpe link inválido*`
}

exports.groupo = () => {
	return`*「SÓ EM GRUPO」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT APENAS」*`
}

exports.ownerg = () => {
	return`*「SOMENTE OWNER DO GRUPO」*`
}

exports.admin = () => {
	return`*「SOMENTE ADMIS DO GRUPO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW NÃO ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*limpar todo o sucesso*`
}

exports.pc = () => {
	return`*「REGISTRASI 」*\n\n para saber se você se cadastrou, verifique a mensagem que enviei  \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DE PAÍS 」*\n\n você se registrou com os dados \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade\n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : não se esqueça deste número porque é importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} script do proprietário bukan*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} seu level não é o suficiente*\n\n*┏⊱seu lev : ${getLevelingLevel(sender)}*\n*┣⊱comando jenis : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} seu nível não é suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisitos de nivel: ${ahb}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} seu nível não é suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisitos de nivel: ${ahc}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP _`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} seu nivel nao e suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisitos de nivel : ${ahd}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} seu level nao e suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisito de nivel: ${ahe}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} seu level nao e suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱requisito de nivel : ${ahf}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *ABOUT USER*  ⊰━━┓
┣⊱ *Nome* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Uang mu* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Role* : ${role}
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *User register* : ${_registered.length}
┗━━━⊱  ⸨ *AFFIS* ⸩  ⊰━━━━┛


┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker* 
┣⊱ *${prefix}avengers* <teks|teks>
┣⊱ *${prefix}summer* <teks>
┣⊱ *${prefix}sandwrite* <teks>
┣⊱ *${prefix}metaldark* <teks>
┣⊱ *${prefix}dropwater* <teks>
┣⊱ *${prefix}greenneon* <teks>
┣⊱ *${prefix}neontext* <teks>
┣⊱ *${prefix}sumery* <teks>
┣⊱ *${prefix}blood* <teks>
┣⊱ *${prefix}firework* <teks>
┣⊱ *${prefix}lava* <teks>
┣⊱ *${prefix}qrcode* <teks>
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}mining*
┣⊱ *${prefix}bisakah* <teks>
┣⊱ *${prefix}kapankah* <teks>
┣⊱ *${prefix}apakah* <teks>
┣⊱ *${prefix}rate* <teks>
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid* <teks>
┣⊱ *${prefix}happymod* <teks>
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}brainly* [error]
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}joox* <judul>
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <jumblah>
┣⊱ *${prefix}transfer* <tag |jumblah>
┣⊱ *${prefix}dompet*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}kick* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag>
┣⊱ *${prefix}promote* <tag>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <tag>
┣⊱ *${prefix}setppbot*
┣━━⊱ *THANGKS TO* ⊰━━┫
┃
┣⊱ *AFFIS JUNIANTO* <dev>
┣⊱ *FADHIL GRAPHY* <partner>
┣⊱ *MHANKBARBARS* <sc ori>
┣⊱ *MYBOT TEAM* <team>
┃
┣⊱ NOTE : TQTO DI HAPUS
┃ GW GAK UP LAGI OKE
┃
┗━━⊱  ⸨ *X-BOT* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role* :  ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*descupe ${pushname} O limite de hoje expira*\n*limite de compra para obter limite / subir de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
o resto do seu limit : ${limitCounts}

NOTA : para chegar ao limit. pode passar de nível ou buylimit`
}

exports.satukos = () => {
	return`*Adicionar parâmetros 1/enable atual 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}