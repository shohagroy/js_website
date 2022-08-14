

// header section strat -------------->>

//get body tag by id;
const bodySection = document.getElementById('main_body');

//crate header tag and appendChild set
const headerSection = document.createElement('header');
bodySection.appendChild(headerSection);

// crate nav tag and append set
const navigation = document.createElement('nav');
headerSection.appendChild(navigation);

//crate 2 div tag on navigation section
const div1 = document.createElement('div');
const div2 = document.createElement('div');
navigation.appendChild(div1);
navigation.appendChild(div2);

// create logo setion on navigation
const heroImage = document.createElement('h4');
div1.appendChild(heroImage);
heroImage.innerText = 'Logo_HTML';


//create  menu item section
const ulitem = document.createElement('ul');
div2.appendChild(ulitem);

//create li  and appentchild ul;
const li1 = document.createElement('li');
ulitem.appendChild(li1);
li1.innerText = "Home";

const li2 = document.createElement('li');
ulitem.appendChild(li2);
li2.innerText = "Service";

const li3 = document.createElement('li');
ulitem.appendChild(li3);
li3.innerText = "Product";

const li4 = document.createElement('li');
ulitem.appendChild(li4);
li4.innerText = "About";

const li5 = document.createElement('li');
ulitem.appendChild(li5);
li5.innerText = "Contact";

const allList = document.getElementsByTagName('li');

// navigatin style section

//header section 
headerSection.style.padding = '0px 20px'
headerSection.style.backgroundColor = "lightblue"

//navigation main continer
navigation.style.display = 'flex'
navigation.style.justifyContent = "space-between"
navigation.style.alignItems = 'center'

//ul continer
ulitem.style.display = 'flex';

// li container
for(const li of allList){
    li.style.width = '100px'
    li.style.textAlign = 'center'
    li.style.listStyle = 'none'
    li.style.cursor = 'pointer'
}

//-------- header section end ------------------------------------->>


// ------------ main section strat -----------------------

//main section create and append child added
const mainSection = document.createElement('main');
bodySection.appendChild(mainSection);

const heroSection = document.createElement('div');
mainSection.appendChild(heroSection);

//hero heading
const heroHeading = document.createElement('h1');
heroHeading.innerText = `Let’s Help Those Who Are
More In Need`;
heroHeading.style.color = 'white';
heroHeading.style.fontSize = '60px';
heroHeading.style.textAlign = 'center';

heroSection.appendChild(heroHeading);

heroSection.style.display = 'flex';
heroSection.style.flexDirection = "column"

heroSection.style.justifyContent = 'center';
heroSection.style.alignItems = 'center';

const heroPara = document.createElement('p');
heroPara.innerText = `Extreme flooding in Sylhet and Sunamganj districts in May,2022 caused heartbreaking damage
and devastation, putting  `;

heroSection.appendChild(heroPara);

const heroParaSpan = document.createElement('span');
heroParaSpan.innerText = '1.5 million children at risk.';

heroPara.appendChild(heroParaSpan);

// style
heroPara.style.textAlign = 'center';
heroPara.style.color = 'white';
heroPara.style.fontSize = '20px';
heroParaSpan.style.textDecoration = 'underline';


// button
const heroButton = document.createElement('button');
heroButton.innerText = 'Donate Now';
heroSection.appendChild(heroButton);

// style
heroButton.style.background = 'tomato';
heroButton.style.color = 'white';
heroButton.style.padding = '10px 20px';
heroButton.style.fontSize = '20px';
heroButton.style.borderRadius = '10px';

// hero section style
heroSection.style.height = '800px';
heroSection.style.width = '100%';
heroSection.style.backgroundImage = 'linear-gradient(rgba(15, 15, 15, 0.20), rgba(0, 0, 0, 0.80)), url(flooding_bg_1.JPG)';
heroSection.style.backgroundSize = 'cover';


// hero section end ---------------->>>

// Donate Today section 
const donateSection = document.createElement('section');
mainSection.appendChild(donateSection);
const donateHeading = document.createElement('h1');
donateHeading.innerText = 'Donate Today'
donateSection.appendChild(donateHeading)


const donatePara1 = document.createElement('p');
donatePara1.innerText = `Bangladesh has been hit with the worst flooding in 100 years. Thousands of children are at risk, threatened by a high risk of drowning, disease, and malnutrition. More than 36,000 children are crowded into emergency flood shelters. Families and children are trapped at home waiting for boats to bring relief. Roads and homes have been submerged, power stations are down, and over 380 schools have been closed or impacted.`;
donateSection.appendChild(donatePara1);

const donateButton100 = document.createElement('button');
donateButton100.innerText ='100tk'
donateSection.appendChild(donateButton100);
donateButton100.setAttribute('class', 'donate_btn')

const donateButton200 = document.createElement('button');
donateButton200.innerText ='200tk'
donateSection.appendChild(donateButton200);

const donateButton500 = document.createElement('button');
donateButton500.innerText ='500tk'
donateSection.appendChild(donateButton500);

const donateButton1000 = document.createElement('button');
donateButton1000.innerText ='1000tk'
donateSection.appendChild(donateButton1000);

const donateButton5000 = document.createElement('button');
donateButton5000.innerText ='5000tk'
donateSection.appendChild(donateButton5000);


// input fild 
const inputArea = document.createElement('div')
donateSection.appendChild(inputArea)


const inputSection = document.createElement('input');
inputSection.setAttribute('placeholder', 'Other Ammount (Taka)');
inputArea.appendChild(inputSection);


// button
const donatedDiv = document.createElement('div');
inputArea.appendChild(donatedDiv);

const donateButton2 = document.createElement('button');
donateButton2.innerText = 'Donate Now';
donatedDiv.appendChild(donateButton2);


// our donte section 

const ourDonatePlan = document.createElement('section');
mainSection.appendChild(ourDonatePlan);
const ourDonateHeading = document.createElement('h1');
ourDonateHeading.innerText = 'Our Donate Plan'
ourDonatePlan.appendChild(ourDonateHeading)


const ourDonatePara1 = document.createElement('p');
ourDonatePara1.innerText = `Recurrent flooding, cyclones, and storm-surges are common events in Bangladesh that put millions of children at risk. Every year they leave vast devastation and damage in these areas, and we need to be ready to act.`;
ourDonatePlan.appendChild(ourDonatePara1);

const mainContiner = document.createElement('div');
ourDonatePlan.appendChild(mainContiner);

const footContiner = document.createElement('div');
mainContiner.appendChild(footContiner);

const foodImagecontainer = document.createElement('div');
footContiner.appendChild(foodImagecontainer);

const foodImage = document.createElement('img');
foodImage.setAttribute('src', 'food.png')
footContiner.appendChild(foodImage);

const foodheading = document.createElement('h2');
foodheading.innerText = 'Food for a family';
footContiner.appendChild(foodheading);

const foodpara = document.createElement('p');
foodpara.innerText = 'Thousands of people in Sylhet and Sunamganj have become stranded in floods. Although water recedes in places, people are struggling with acute food crisis and drinking water';
footContiner.appendChild(foodpara);


mainContiner.style.height = '500px';
mainContiner.style.display = 'flex'
mainContiner.style.justifyContent = 'space-evenly'


footContiner.style.height = '350px';
footContiner.style.width = '350px';
footContiner.style.background = 'rgba(0, 153, 255, 0.123)';
footContiner.style.borderRadius = '10px'

foodImage.style.paddingTop = '20px'
foodImage.style.paddingLeft = '20px'

foodheading.style.paddingLeft = '20px'

foodpara.style.padding = '20px'


// -----------------------------------------------------------------------
const shelterContiner = document.createElement('div');
mainContiner.appendChild(shelterContiner);

const shelterImagecontainer = document.createElement('div');
shelterContiner.appendChild(shelterImagecontainer);

const shelterImage = document.createElement('img');
shelterImage.setAttribute('src', 'shelter.png')
shelterContiner.appendChild(shelterImage);

const shelterheading = document.createElement('h2');
shelterheading.innerText = 'Shelter for a family';
shelterContiner.appendChild(shelterheading);

const shelterpara = document.createElement('p');
shelterpara.innerText = 'Heavy rains and upstream floods have gripped the entire Sylhet region. Millions of people are now stranded. Millions of people have become homeless, unable to find a place to take shelter. Many people are living a dehumanized life.';
shelterContiner.appendChild(shelterpara);



shelterContiner.style.height = '350px';
shelterContiner.style.width = '350px';
shelterContiner.style.background = 'rgba(255, 0, 0, 0.086)';
shelterContiner.style.borderRadius = '10px'

shelterImage.style.paddingTop = '20px'
shelterImage.style.paddingLeft = '20px'

shelterheading.style.paddingLeft = '20px'

shelterpara.style.padding = '20px'

// -------------------------------------------------------------------------



// -----------------------------------------------------------------------
const educationContiner = document.createElement('div');
mainContiner.appendChild(educationContiner);

const educationImagecontainer = document.createElement('div');
educationContiner.appendChild(educationImagecontainer);

const educationImage = document.createElement('img');
educationImage.setAttribute('src', 'Frame-1.png')
educationContiner.appendChild(educationImage);

const educationheading = document.createElement('h2');
educationheading.innerText = 'Education for a child';
educationContiner.appendChild(educationheading);

const educationpara = document.createElement('p');
educationpara.innerText = 'The floodwaters that have caused more than 800 schools to close in north-eastern Bangladesh.The worst flooding to hit this area in years has devastated homes, damaged crops and cut off access to villages across five districts.';
educationContiner.appendChild(educationpara);



educationContiner.style.height = '350px';
educationContiner.style.width = '350px';
educationContiner.style.background = 'rgba(255, 255, 0, 0.1)';
educationContiner.style.borderRadius = '10px'

educationImage.style.paddingTop = '20px'
educationImage.style.paddingLeft = '20px'

educationheading.style.paddingLeft = '20px'

educationpara.style.padding = '20px'

// ____________________________________________________________


// get update section 

const getUpdate = document.createElement('section');
mainSection.appendChild(getUpdate);
const getUpdateHeading = document.createElement('h1');
getUpdateHeading.innerText = 'Get My Updates'
getUpdate.appendChild(getUpdateHeading)


const getUpdatePara1 = document.createElement('p');
getUpdatePara1.innerText = `Ours is urgently seeking $1.5 million in funding for the emergency response as it provides life-saving supplies and services to children and families.`;
getUpdate.appendChild(getUpdatePara1);

const getUpdatePara2 = document.createElement('p');
getUpdatePara2.innerText = `Disclaimer: Please note that your donation will help save, nurture and protect lives of vulnerable children in Bangladesh by allowing us to allocate resources to areas that need the funds most urgently. Thank you.`;
getUpdate.appendChild(getUpdatePara2);


const emailMain = document.createElement('div');
getUpdate.appendChild(emailMain);


const inputEmail = document.createElement('input');
inputEmail.setAttribute('placeholder', 'Email')
emailMain.appendChild(inputEmail);

const emailButton = document.createElement('button');
emailButton.innerText = 'Subscribe';

emailMain.appendChild(emailButton);

// ___________________________________________________________________________



// footer section 
// ______________________________________________________________

const footerContainer = document.createElement('section');
mainSection.appendChild(footerContainer);

const footerPara1 = document.createElement('p');
footerPara1.innerText = '© Copyright 2022, All Right Reserved.'
footerContainer.appendChild(footerPara1);

const footerPara2 = document.createElement('p');
footerPara2.innerText = 'Design & Development By: Shohag Roy'
footerContainer.appendChild(footerPara2);




// style footer 

footerContainer.style.backgroundColor = 'black'
footerContainer.style.height = '150px'
footerContainer.style.width = '100%'

footerPara1.style.color = 'white';
footerPara1.style.fontSize = '20px'
footerPara1.style.textAlign ='center'
footerPara1.style.paddingTop = '30px'
footerContainer.style.width = '100%'

footerPara2.style.color = 'white';
footerPara2.style.fontSize = '20px'
footerPara2.style.textAlign ='center'
footerPara2.style.paddingBottom = '30px'




// get update style 
getUpdateHeading.style.fontSize = '40px'
getUpdateHeading.style.textAlign = 'center'


getUpdatePara1.style.width = '60%';
getUpdatePara1.style.margin = 'auto'
getUpdatePara1.style.fontSize = '20px'
getUpdatePara1.style.textAlign = 'center'
getUpdatePara1.style.padding = '10px'



getUpdatePara2.style.width = '60%';
getUpdatePara2.style.margin = 'auto'
getUpdatePara2.style.fontSize = '20px'
getUpdatePara2.style.textAlign = 'center'
getUpdatePara2.style.padding = '10px'



emailMain.style.width = "60%";
emailMain.style.height = '220px'
emailMain.style.backgroundColor = '#FFF4D6';
emailMain.style.margin = '100px auto'
emailMain.style.borderRadius = '15px'
emailMain.style.display = 'flex'
emailMain.style.justifyContent = 'center'
emailMain.style.alignItems = 'center'




inputEmail.style.width = '50%'
inputEmail.style.height = '40px'
inputEmail.style.fontSize = '20px'
inputEmail.style.border ='none'
inputEmail.style.backgroundColor = '#D9D9D9'
inputEmail.style.borderBottomLeftRadius = "10px"
inputEmail.style.borderTopLeftRadius = "10px"
inputEmail.style.paddingLeft = '20px'




emailButton.style.width= '15%'
emailButton.style.height = '40px'
emailButton.style.fontSize = '20px'
emailButton.style.border ='none'
emailButton.style.backgroundColor = 'tomato'
emailButton.style.color = 'white'
emailButton.style.borderBottomRightRadius = '10px'
emailButton.style.borderTopRightRadius = '10px'







// style
donateButton2.style.background = 'tomato';
donateButton2.style.margin = "50px";
donateButton2.style.color = 'white';
donateButton2.style.padding = '15px 20px';
donateButton2.style.fontSize = '20px';
donateButton2.style.borderRadius = '10px';




// style
donateSection.style.height = '60vh';
donateSection.style.width = '100%';
donateSection.style.textAlign = 'center';
donateSection.style.margin = '50px 0';
donateHeading.style.fontSize = '40px'

donatePara1.style.fontSize = '20px';
donatePara1.style.width = '50%'
donatePara1.style.margin = 'auto'
donatePara1.style.marginBottom = "30px"

// style button 
donateButton100.style.padding = '20px'
donateButton100.style.fontSize = '30px'
donateButton100.style.fontWeight = 'bolder'
donateButton100.style.margin = '5px'
donateButton100.style.borderRadius = '10px'
donateButton100.style.border = 'none'

donateButton200.style.padding = '20px'
donateButton200.style.fontSize = '30px'
donateButton200.style.fontWeight = 'bolder'
donateButton200.style.margin = '5px'
donateButton200.style.borderRadius = '10px'
donateButton200.style.border = 'none'


donateButton500.style.padding = '20px'
donateButton500.style.fontSize = '30px'
donateButton500.style.fontWeight = 'bolder'
donateButton500.style.margin = '5px'
donateButton500.style.borderRadius = '10px'
donateButton500.style.border = 'none'


donateButton1000.style.padding = '20px'
donateButton1000.style.fontSize = '30px'
donateButton1000.style.fontWeight = 'bolder'
donateButton1000.style.margin = '5px'
donateButton1000.style.borderRadius = '10px'
donateButton1000.style.border = 'none'


donateButton5000.style.padding = '20px'
donateButton5000.style.fontSize = '30px'
donateButton5000.style.fontWeight = 'bolder'
donateButton5000.style.margin = '5px'
donateButton5000.style.borderRadius = '10px'
donateButton5000.style.border = 'none'



// inputArea style 
inputArea.style.marginTop = '50px'
inputSection.style.width = "650px"
inputSection.style.height = '40px'
inputSection.style.textAlign = 'center'
inputSection.style.fontSize = "25px"
inputSection.style.border = 'none'
inputSection.style.borderBottom = '2px solid black'


// our donte section style
ourDonateHeading.style.fontSize = '40px'
ourDonateHeading.style.textAlign = "center"
ourDonateHeading.style.marginTop = '200px'
ourDonatePara1.style.fontSize = '20px'
ourDonatePara1.style.width = '60%'
ourDonatePara1.style.margin = "auto"
ourDonatePara1.style.marginBottom = '50px'


// function section
donateButton100.addEventListener('click', function(){
    donateButton100.style.backgroundColor = 'rgba(255, 38, 0, 0.2)';
    donateButton100.style.color = 'red';
    donateButton100.style.border = '1px solid red'
})

donateButton200.addEventListener('click', function(){
    donateButton200.style.backgroundColor = 'rgba(255, 38, 0, 0.2)';
    donateButton200.style.color = 'red';
    donateButton200.style.border = '1px solid red'

})

donateButton500.addEventListener('click', function(){
    donateButton500.style.backgroundColor = 'rgba(255, 38, 0, 0.2)';
    donateButton500.style.color = 'red';
    donateButton500.style.border = '1px solid red'

})

donateButton1000.addEventListener('click', function(){
    donateButton1000.style.backgroundColor = 'rgba(255, 38, 0, 0.2)';
    donateButton1000.style.color = 'red';
    donateButton1000.style.border = '1px solid red'

})

donateButton5000.addEventListener('click', function(){
    donateButton5000.style.backgroundColor = 'rgba(255, 38, 0, 0.2)';
    donateButton5000.style.color = 'red';
    donateButton5000.style.border = '1px solid red'

})
