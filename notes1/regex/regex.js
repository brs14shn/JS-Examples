



let string=
"
//Elon Musk veya tam adıyla Elon Reeve Musk (d. 28 Haziran 1971, Pretoria, Güney Afrika), mühendis, endüstriyel tasarımcı, teknoloji girişimcisi 
//ve hayırseverdir.Doğduğu yer olan Güney Afrika Cumhuriyeti dışında, Kanada ve ABD vatandaşıdır ve 20 yaşında göç ettiği ABD'de yaşamaktadır.Elon Musk 
//aynı zamanda günümüzde Twitter'ın sahibi; SpaceX uzay şirketinin kurucusu, CEO'su ve mühendislik ile tasarım ofisleri şefi; erken yatırımcı, Tesla otomotiv 
//şirketinin CEO'su ve ürün mimarı; The Boring Company şirketinin kurucusu;Neuralink, Starlink ile OpenAI'nin kurucu ortağı ve ayrıca ilk eş başkanıdır."



//! 1-Meta Karakterler (Escaped Characters)

/*“.“
Sayfa ya da paragraf sonu dışındaki herhangi bir karakteri temsil eder. Örnek olarak “k.re” ifadesi “küre”, “kare”, “kore”, “kere” ile eşlenecektir.*/

let regex=(/s.z/g)

let match=string.match(regex)
console.log(match)
