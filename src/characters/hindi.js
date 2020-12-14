// export const layout = []
// Enable/disable diacritics
// Enable/disable combinations
// Suggest that looking at the code makes sense if you're a programmer

const devanagariChars = 'क|का|कि|की|कु|कू|कृ|कॅ|के|कै|कॉ|को|कौ|क़|क़ा|क़ि|क़ी|क़ु|क़ू|क़ृ|क़ॅ|क़े|क़ै|क़ॉ|क़ो|क़ौ|ख|खा|खि|खी|खु|खू|खृ|खॅ|खे|खै|खॉ|खो|खौ|ख़|ख़ा|ख़ि|ख़ी|ख़ु|ख़ू|ख़ृ|ख़ॅ|ख़े|ख़ै|ख़ॉ|ख़ो|ख़ौ|ग|गा|गि|गी|गु|गू|गृ|गॅ|गे|गै|गॉ|गो|गौ|ग़|ग़ा|ग़ि|ग़ी|ग़ु|ग़ू|ग़ृ|ग़ॅ|ग़े|ग़ै|ग़ॉ|ग़ो|ग़ौ|घ|घा|घि|घी|घु|घू|घृ|घॅ|घे|घै|घॉ|घो|घौ|च|चा|चि|ची|चु|चू|चृ|चॅ|चे|चै|चॉ|चो|चौ|छ|छा|छि|छी|छु|छू|छृ|छॅ|छे|छै|छॉ|छो|छौ|ज|जा|जि|जी|जु|जू|जृ|जॅ|जे|जै|जॉ|जो|जौ|ज़|ज़ा|ज़ि|ज़ी|ज़ु|ज़ू|ज़ृ|ज़ॅ|ज़े|ज़ै|ज़ॉ|ज़ो|ज़ौ|झ|झा|झि|झी|झु|झू|झृ|झॅ|झे|झै|झॉ|झो|झौ|ञ|ञा|ञि|ञी|ञु|ञू|ञृ|ञॅ|ञे|ञै|ञॉ|ञो|ञौ|ट|टा|टि|टी|टु|टू|टृ|टॅ|टे|टै|टॉ|टो|टौ|ठ|ठा|ठि|ठी|ठु|ठू|ठृ|ठॅ|ठे|ठै|ठॉ|ठो|ठौ|ड|डा|डि|डी|डु|डू|डृ|डॅ|डे|डै|डॉ|डो|डौ|ड़|ड़ा|ड़ि|ड़ी|ड़ु|ड़ू|ड़ृ|ड़ॅ|ड़े|ड़ै|ड़ॉ|ड़ो|ड़ौ|ढ|ढा|ढि|ढी|ढु|ढू|ढृ|ढॅ|ढे|ढै|ढॉ|ढो|ढौ|ढ़|ढ़ा|ढ़ि|ढ़ी|ढ़ु|ढ़ू|ढ़ृ|ढ़ॅ|ढ़े|ढ़ै|ढ़ॉ|ढ़ो|ढ़ौ|ण|णा|णि|णी|णु|णू|णृ|णॅ|णे|णै|णॉ|णो|णौ|त|ता|ति|ती|तु|तू|तृ|तॅ|ते|तै|तॉ|तो|तौ|थ|था|थि|थी|थु|थू|थृ|थॅ|थे|थै|थॉ|थो|थौ|द|दा|दि|दी|दु|दू|दृ|दॅ|दे|दै|दॉ|दो|दौ|ध|धा|धि|धी|धु|धू|धृ|धॅ|धे|धै|धॉ|धो|धौ|न|ना|नि|नी|नु|नू|नृ|नॅ|ने|नै|नॉ|नो|नौ|प|पा|पि|पी|पु|पू|पृ|पॅ|पे|पै|पॉ|पो|पौ|फ|फा|फि|फी|फु|फू|फृ|फॅ|फे|फै|फॉ|फो|फौ|फ़|फ़ा|फ़ि|फ़ी|फ़ु|फ़ू|फ़ृ|फ़ॅ|फ़े|फ़ै|फ़ॉ|फ़ो|फ़ौ|ब|बा|बि|बी|बु|बू|बृ|बॅ|बे|बै|बॉ|बो|बौ|भ|भा|भि|भी|भु|भू|भृ|भॅ|भे|भै|भॉ|भो|भौ|म|मा|मि|मी|मु|मू|मृ|मॅ|मे|मै|मॉ|मो|मौ|य|या|यि|यी|यु|यू|यृ|यॅ|ये|यै|यॉ|यो|यौ|र|रा|रि|री|रु|रू|रृ|रॅ|रे|रै|रॉ|रो|रौ|ल|ला|लि|ली|लु|लू|लृ|लॅ|ले|लै|लॉ|लो|लौ|व|वा|वि|वी|वु|वू|वृ|वॅ|वे|वै|वॉ|वो|वौ|श|शा|शि|शी|शु|शू|शृ|शॅ|शे|शै|शॉ|शो|शौ|ष|षा|षि|षी|षु|षू|षृ|षॅ|षे|षै|षॉ|षो|षौ|स|सा|सि|सी|सु|सू|सृ|सॅ|से|सै|सॉ|सो|सौ|ह|हा|हि|ही|हु|हू|हृ|हॅ|हे|है|हॉ|हो|हौ'.split(
  '|'
)
const devanagariRom = 'K | ka | ki | ki | ku | kr | ka | ka | ko | ko | ka | ka | ki | ki | ku | ku | kri | kat | Kho | Kh | Kha | Kh | Khi | Khoo | Khoo | Khru | Kha | Kha | Kha | Kha | Kho | Kha | Kha | Kha | Khai | Khai | Khoo | Khoo | Khoo | Khay | Khay | Khay | Khay | Khay | Kho | kho | g | ga | gi | gi | gu | goo | home | ga | ga | ga | ga | go | cow | g | ga | gi | Go | Go | Go | Gh | Ghee | Ghee | Ghee | Ghee | Gheu | Ghee | Ghee | Ghee | Ghee | Ghee | Ghee | Chhe | Cha | Chi | Chi | Chu | Chu | Chue | Che | Che | Cho | Chou | Cho | Chou | Chh | Chh | Chh | Chh | Chh | Chh | Chh | Chh | Chh | Chh | Chh | Chh | J | Ja | Ji | Jh | Ju | Ju | Jr | Jae | J | jai | jo | jo | barley | z | za | zi | zi | zu | zu | zru | za | ze | zai | zo | zo | zou | zh | zha | zhi | zhi | zhoo | zhu | zhri | Jha | Jhe | Jha | Jha | Jho | Jha | Jn | Jn | Jn | Jn | Jn | Jn | Jn | Jn | Jn | Jn | Jn | Jn | Jn | T | T | T | T | Tu | To | Tr | Ta | Ta | Ta | Taw | Tou | Tou | Stu | Thi | Thi | Thu | Thu | Thru | Thy | Th | Thy | Tho | Th | Tho | Tho | Dr | Di | D | Du | Doo | Doo | Day | Dae | Dr. | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Doo | Find Nani | nunu | nunu | nri | naina | naye | naye | nayu | nayu | nau | ta | ta | ti | ti | tu | tu | trati | ta | te | tai | so | tau | tha | tha | Thi | Thi | Thu | Thu | Thru | Thy | Thy | Tho | Tho | Tho | Tho | The | Da | Di | Di | Do | Do | Give | The | Dha | Dh | Dh | Dh | Dh | Dh | Dh | Dh | Dh | Dha | Dh | Wash | Dha | Na | Na | Ni | Ni | Nu | Nu | Nru | Na | Ne | Nai | No | No | Nine | Pa | Pa | Pi | P | Pu | Pu | Page | Pa | Pe | Pa | Pau | Fe | fu | fu | fe | fe | fe | fe | fo | fo | fa | fe | fe | fe | fe | fu | fu | fe | fe | fe | fe | fe | pho | fa | ba | ba | Bi | Bi | Bu | Bu | Bri | Ba | Ba | Bai | Bau | Bo | Bau | Bhe | Bhe | Ma | Mi | Me | Mu | Moo | Moo | Ma | Me | Ma | Mo | Mo | Mau | Yay | Or | Yi | Yi | U | Yr | Ya | Ye | Yayo | Yo | Yo | Su | Ra | Ri | Ri | Ru | Ru | Rr | Ra | Re | Rai | Raw | Ro | Rau | L | La | Li | Li | Lu | Lu | Lr | Ll | Ll | Ll | Ll | Flame | W | W | V | V | Vu | Vu | Vru | Wa | Ve | Va | Wo | Wo | Vau | Sh | Sha | Shi | Shi | Shu | Shu | Shru | Sha | She | Shae | Show | Shows | Shishu | Shishu | Shishu | Shishu | Shru | Shishu | Shishu | Sho | Sho | Sho | Shishu | Shishu | Saw | So | Hundreds'
  .toLocaleLowerCase()
  .split(' | ')

const devanagari = devanagariRom.map((x, i) => ({
  romanization: x,
  character: devanagariChars[i],
}))

export const map = devanagari.reduce(
  (acc, a) => ({
    ...acc,
    [a.character]: a.romanization,
  }),
  {}
)

export const layout = [
  devanagariChars.slice(0, 10),
  devanagariChars.slice(10, 20),
  devanagariChars.slice(20, 30),
  devanagariChars.slice(30, 40),
  devanagariChars.slice(40, 50),
]

// console.log(devanagariChars.length, devanagariRom.length)

// export const byCharacter = hiragana.reduce((acc, a) => {
//   acc[a.character] = a
//   return acc
// }, {})

// export const byRomanization = hiragana.reduce((acc, a) => {
//   acc[a.romanization] = a
//   return acc
// }, {})
