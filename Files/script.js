const paragraphs = [
    'Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
    'Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.',
    'CSS (Cascading Style Sheets) is the standard stylesheet language used to design and format the presentation of web pages. While HTML provides the structure of a page, CSS controls its visual appearance.',
    'One of the key features of JavaScript is its ability to manipulate and modify the content of web pages in real-time. This enables developers to create engaging user experiences by dynamically updating the page without requiring a full refresh.',
    'JavaScript is often used alongside HTML and CSS to create modern, interactive websites. HTML provides the structure, CSS handles the styling, and JavaScript handles the behavior and functionality.',
    'JavaScript is known for its flexibility and extensive libraries and frameworks. It has a vast ecosystem of tools and resources that make it easier for developers to create complex applications efficiently.',
    'Android Studio is the official integrated development environment (IDE) for Android app development. It provides a rich set of tools and features, including a code editor, visual layout editor, and emulator, to streamline the development process.',
    'JavaScript frameworks like AngularJS and Vue.js are popular choices for building robust web applications. They provide a structured approach to development, with features like data binding, component-based architecture, and powerful routing capabilities.',
    'Android offers a wide range of features and APIs that allow developers to access device hardware and sensors, integrate with other apps, and create immersive user experiences. It supports multi-threading, push notifications, and advanced graphics rendering.',
    
  ];


  


const item = document.getElementById("items");
const dataContainer = document.getElementById("data");


function shuffle(array){

  let currentIndex = array.length;
  let randomIndex;

  while(currentIndex!=0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex],array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  
  return array;

}

function generate() {

  if (item.value == 0) {
    alert("The value cannot be zero");
  }else if (item.value > paragraphs.length){
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
  }else{

    const shuffleParagraphs = paragraphs;
    shuffle(paragraphs);

    const selectedParagraphs = shuffleParagraphs.slice(0,item.value);
    const paragraphsHTML = selectedParagraphs.map(paragraphs => `<p>${paragraphs}</p>`).join("");
    dataContainer.innerHTML = paragraphsHTML;

  }
}