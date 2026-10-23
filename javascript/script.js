const problem = document.getElementById("problem");
const category = document.getElementById("category");
const priority = document.getElementById("priority");
const description = document.getElementById("description");
const demandes = document.getElementById("demandes");
const btn = document.getElementById("btn");
const place = document.getElementById("counter")


let id = 0
let data = [{ index: 1, problem: "Installation d’un logiciel", category: "Réseau", priority: "Haute", description: "Le réseau se déconnecte régulièrement." }]


btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (problem.value == "" || description.value == "") {
        window.alert("please fill the required field");
        return;
    }

    /*partie ajouter*/
    let temp = {
        index: id,
        problem: problem.value,
        category: category.value,
        priority: priority.value,
        description: description.value,
    }
    data.push(temp);
    temp = {}
    
    console.log(data)

    display()


    
    id++
    problem.value = ""
    description.value = ""
})

function display(){
    /*partie afficher*/
    let count = 0;
    demandes.textContent = ""
    for (let i = 0; i <= data.length - 1; i++) {
        
        const div = document.createElement("div");
        const div1 = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const div2 = document.createElement("div");
        const h4 = document.createElement("h4");
        const p1 = document.createElement("p");
        const div3 = document.createElement("div");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const div4 = document.createElement("div")
        const btn1 = document.createElement("button")
        const btn2 = document.createElement("button")

        /* classes for divs */
        div.setAttribute("class", "carte")
        div.setAttribute("id","card"+count)
        div1.setAttribute("class", "upper")
        div2.setAttribute("class", "body")
        div3.setAttribute("class", "status")
        div4.setAttribute("class", "buttons")

        /*img*/
        if (data[i].category == "material") {
            img.setAttribute("src", "assets/icons/piano-keyboard-svgrepo-com.svg")
        } else if (data[i].category == "Logiciel") {
            img.setAttribute("src", "assets/icons/install-svgrepo-com.svg")
        } else if (data[i].category == "Réseau") {
            img.setAttribute("src", "assets/icons/wifi-exclamation-svgrepo-com.svg")
        }
        img.setAttribute("class", "icon")

        /*p*/
        p.textContent = "HD-00" + (count + 1)
        p.setAttribute("class", "serial")

        /*h4*/
        h4.textContent = data[i].problem
        h4.setAttribute("class", "titre")

        /*p1*/
        p1.textContent = data[i].description
        p1.setAttribute("class", "desc")

        /*p2*/
        p2.textContent = data[i].category
        p2.setAttribute("class", "type")

        /*p3*/
        p3.textContent = data[i].priority
        p3.setAttribute("class", "priority")

        /*btn1*/
        btn1.textContent = "✎ Modifier"
        btn1.setAttribute("class", "modify")
        btn1.setAttribute("id","modify")
        
        /*btn2*/
        btn2.textContent = "♜ Supprimer"
        btn2.setAttribute("class", "delete")
        btn2.setAttribute("id","delete")
        btn2.setAttribute("onclick",`deletecard("${data[i].index}")`)

        /*placements*/
        div1.append(img)
        div1.append(p)
        div.append(div1)
        div3.append(p2)
        div3.append(p3)
        div2.append(h4)
        div2.append(p1)
        div2.append(div3)
        div.append(div2)
        div4.append(btn1)
        div4.append(btn2)
        div.append(div4)
        demandes.append(div)

        /*counter*/
        count++
        place.textContent = count + " demandes"
    }
}

function deletecard(a){
    for (let i = 0; i <= data.length-1; i++) {
        if(data[i].index==a){
            data.splice(i,1)
            display()
            console.log(data)
        }
    }
}
