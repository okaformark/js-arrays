const dinosaurs = [
    {
        dinoType: 't-rex',
        name: 'wrex',
    },
    {
        dinoType: 'stegosaurus',
        name: 'steve',
    },
    {
        dinoType: 'velociraptor',
        name: 'ted'
    }
];

//loop over the array
//build up a domstring
//print domstring to the dom
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
    let domString = "";
    for(let i = 0; i < dinosaurs.length; i++){
        domString += `<div class = "dinosaur">`;
        domString += ` <h3>${dinosaurs[i].dinoType}</h3>`;
        domString += `<p>${dinosaurs[i].name}</p>`;
        domString +=`</div>`;

    }
    printToDom('dino-barn', domString);
};

const assignments = [
    {
        title: 'product card1',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentUrl: 'www.google.com'
    },
    {
        title: 'product card2',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentUrl: 'www.google.com'
    },
    {
        title: 'product card3',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentUrl: 'www.google.com'
    },
    {
        title: 'product card4',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentUrl: 'www.google.com'
    },
    {
        title: 'product card5',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentUrl: 'www.google.com'
    }
];
//total of 5 assignments
//build assignments - loop over assignments and make a domstring
//reuse the printtodom function to display the domstring

const exercise = () =>{
    let domString1 = "";
    for(let i = 0; i < assignments.length; i++){
        domString1 += `<div class = "assignment">`;
        domString1 +=   `<div class = "title"><h3>${assignments[i].title}</h3></div>`;
        
        domString1 +=   `<div><strong><p>Due date: ${assignments[i].dueDate}</p></strong></div>`;
        
        domString1 +=   `<div><p>Get the assignment <a href = "${assignments[i].assignmentUrl}">HERE</a></p></div>`;
        
        domString1 +=   `<div><p>Topic: ${assignments[i].topic}</p></div>`;
        
        domString1 +=   `<div><p>Notes: ${assignments[i].notes}</p></div>`;
        domString1 +=`</div>`;
    }
    printToDom('home-work', domString1);
};


const init = () =>{
    buildDinosaurs();
    exercise();
};
init();