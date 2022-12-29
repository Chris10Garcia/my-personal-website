

// using JS to programatically create navigation list
// based on h2 header id's and text content
const navLinks = document.getElementsByClassName("subheader");


// const anchors = []; 

for (const element of navLinks){

    const anch = document.createElement('a')

    anch.href = '#' + element.id;
    anch.textContent = element.textContent

    const nav = document.getElementById("navigation_links")

    nav.append(anch)
}



// using JS to create an event listener to collaspe and open up sections of my page

const divContents = document.getElementsByClassName("content")


document.addEventListener('click', function(e){

    const result = e.target.nodeName;

    if (result === "H2"){
        let block = e.target.parentElement.parentElement.lastElementChild.style.display;
        const blockResult = tester(block);
        e.target.parentElement.parentElement.lastElementChild.style.display = blockResult
    
    } else if(result === "BUTTON"){
        console.log(e.target.parentElement.lastElementChild)
        let block = e.target.parentElement.lastElementChild.style.display
        const blockResult = tester(block)
        e.target.parentElement.lastElementChild.style.display = blockResult
    }

    function tester(block){
        switch (block){
            case "none":
                block = "block";
                break;
    
            case "block":
                block = "none";
                break
    
            case "":
                block = "none"
                break
        }
        return block;
    }

})