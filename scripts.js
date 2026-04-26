function toggleMenu() {
	var x = document.getElementById("NavigaionBarID");
	if (x.className === "NavigationBar") {
		x.className += " Responsive";
	} else {
		x.className = "NavigationBar";
	}
}

const TECH_PAPER = 0;
const PROD_TALK = 1;
const COURSE = 2;
const MISC = 3;

const publications = [
	{
		id: "blurringtheline",
		type: PROD_TALK,
		thumbnail: 0,
		title: "Blurring the Line Between Real and Digital Water in Avatar: Fire and Ash",
		authors: [
			{first: "Sam", last: "Cole"},
			{first: "Nicholas", last: "Illingworth"},
			{first: "Alexey", last: "Stomakhin"},
			{first: "Sean", last: "Flynn"},
		],
		venue: "SIGGRAPH",
		year: 2026,
	},
	{
		id: "fluxdevil",
		type: PROD_TALK,
		thumbnail: 0,
		title: "Creating the Elemental Vortex in Avatar: Fire and Ash",
		authors: [
			{first: "Nicholas", last: "Illingworth"},
			{first: "Alexey", last: "Stomakhin"},
			{first: "Murali", last: "Ramachari"},
			{first: "James", last: "Robinson"},
			{first: "John", last: "Edholm"},
			{first: "Sam", last: "Cole"},
		],
		venue: "SIGGRAPH",
		year: 2026,
	},
	{
		id: "pahi",
		type: TECH_PAPER,
		thumbnail: 1,
		title: "Pahi: A Unified Water Pipeline and Toolset",
		authors: [
			{first: "Alexey", last: "Stomakhin"},
			{first: "Steve", last: "Lesser"},
			{first: "Joel", last: "Wretborn"},
			{first: "Sean", last: "Flynn"},
			{first: "Johnathan", last: "Nixon"},
			{first: "Nicholas", last: "Illingworth"},
			{first: "Adrien", last: "Rollet"},
			{first: "Kevin", last: "Blom"},
			{first: "Douglas", last: "McHale"},
		],
		venue: "DigiPro",
		year: 2023,
	},
];

function researchPaperBlock(p) {
	var str = ``; 
	var image = p.id;
	if (!p.thumbnail) image = `coming_soon`;
	str += `
	<DIV>
	  <A href="research/` + p.id + `.html">
	    <IMG class="PaperThumbnail" src="https://alexey.stomakhin.com/research/title_` + image + `.jpg">
      </A>
      <DIV class="PaperInfo">
	    <A class="PaperTitle" href="research/` + p.id + `.html">` + p.title + `</A><BR>`;
	for (const a of p.authors) {
		const me = a.first == `Alexey` && a.last == `Stomakhin`;
		if (me) str += `<B>`;
		str += a.first[0] + `. ` + a.last;
		if (me) str += `</B>`;
		str += `, `;
	}
	str = str.substring(0, str.length - 2);
	str += `<BR>`;
	suffix = ``;
	if (p.type == PROD_TALK) suffix = ` (Talks)`;
	if (p.type == COURSE) suffix = ` (Courses)`;
	str += `
	    <T class="Conference">` + p.venue + ` ` + p.year + suffix + `</T>
      </DIV>
	</DIV>`
	return str;
}