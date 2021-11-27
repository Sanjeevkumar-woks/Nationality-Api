const bodytag=document.getElementsByTagName("body");
//creating Div element
const bodydiv=document.createElement("div");
bodydiv.setAttribute("class","row row-1 row-sm-2 row-md-4");
//setting the innerHTML of div element
bodydiv.innerHTML=`
<!-- header -->
        <div class="col header">
                <!-- Navigation -->
                    <nav class="navbar  navbar-expand-lg navbar-dark">
                        <a class="navbar-brand" href="#"><i class="fab fa-neos fa-2x"></i>ationality</a> 
                        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link" href="">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Documentation</a>
                            </li>
                        </ul>
                        </div>

                        <!-- Favicon-section -->
                        <div class="favicon ml-auto">
                            <button class="btn btn-sm git"><i id="navfav" class="fab fa-patreon fa-2x"></i></button>
                            <button class="btn btn-sm git"><i id="navfav" class="fab fa-discord fa-2x" ></i></button>
                            <button class="btn btn-sm"><a class="git" href="https://github.com/Sanjeevkumar-woks/Nationality-Api"><i id="navfav" class="fab fa-github fa-2x"></i></a></button>           
                        </div>
                    </nav>
        
                    <div class="row row-1 row-sm-2 row-md-4">
                        <!-- left-section -->
                        <div class="col-md-6 col-sm-12">
                            <div class="left">
                                <h1>Nationality API</h1>
                                <h3>Unofficial Nationality Check</h3>
                                <p id="para">Nationality (時間) is an open-source  API for the Nationality check by the name of individuals. you can check the Nationality easily.</p>
                                <button class="btn btn-lg btn-outline-info" id="learn-btn">Learn More</button>
                                <button class="btn btn-lg btn-light" id="get-start-btn">Get Started</button>
                            </div>
                        </div>
                        
                        <!-- divider -->
                        <div class="vl" ></div>
                        
                        <!-- Right-section -->
                        <div class="col-md-5 col-sm-12">
                            <div class="right">
                                <p>Try out the Nationality Search API</p>
                                <div class="input-group input-group-lg">
                                    <input type="text" class="form-control" id="inputName" placeholder="Search by Name">
                                <div class="input-group-prepend">
                                    <button class="btn btn-light" onclick="searchByName()">Go</button>
                                </div>
                                </div>
                                <p><span>Request: <a href="" id="url-link" class="success">Requested-Data</a></span></p>
                                <p id="request-status">Request Status:</p>
                                <p id="alert"></p>
                                <div id="result">
                                    <div class="table-responsive-md">
                                    <table class="table">
                                        <thead>
                                              <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Country1</th>
                                                <th scope="col">Probability</th>
                                                <th scope="col">Country2</th>
                                                <th scope="col">Probability</th>
                                              </tr>
                                        </thead>
                                        <tbody id="table">
                                    
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                        <!-- right-section-end   -->

                    </div>
            </div>
        </div>
        <!-- .header-end -->

        <!-- patreon-section -->
        <div class="col-12">
            <section class="patreon">
                <div>
                    <button class="btn btn-lg btn-light ml-5">Become a Patron!</button>
                </div>
                <div>
                <p>Please consider supporting us on Patreon to help run and expand the service!</p>
                </div>
            </section>
        </div>

        <!-- open-source-section -->
        <div class="col-12">
            <section id="open-source" >
                <h2>Free & Open Source</h2>
                <p>You can focus on making your app while we keep the requests rolling.</p>
                <button class="btn btn-primary btn-lg">
                   <a class="git" href="https://github.com/Sanjeevkumar-woks/Nationality-Api">View Organization GitHub</a>
                </button>
                </section>
        </div>

        <!-- Git-section -->
        <div class="col-12">
            <section id="github" >
                <h2>Come say hello!</h2>
                <button class="btn btn-lg"><a class="git" href="https://github.com/Sanjeevkumar-woks/Nationality-Api"><i class="fab fa-github-square fa-2x"></i></a></button>
            </section>
        </div>
`;
//appending the div tag to body tag in HTML file using DOM
bodytag[0].appendChild(bodydiv);

//Footer Creation
const html=document.getElementsByTagName("html");
const foot=document.createElement("footer");
foot.innerHTML=` <p>© This website is open-source. Help by making it better.</p>`;
html[0].appendChild(foot);


//Displaying Data into Table
function displayData(data){

    //Adding Rows and Column
    var table=document.getElementById("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    //Assigning Values to Rows and coloumn
   cell1.innerHTML = data.name;
   cell2.innerHTML = data.country[0].country_id;
   cell3.innerHTML=data.country[0].probability;
   cell4.innerHTML=data.country[1].country_id;
   cell5.innerHTML=data.country[1].probability;
}
    //search function
    async function searchByName(){
    const searchName=document.getElementById("inputName").value;

    document.getElementById("inputName").value="";
    const requestStatus=document.getElementById("request-status");
    const urlLink=document.getElementById("url-link");
    
    //Validating Name entered
    if(searchName==""){
        //Creating Alert if name is not entered
        let alertP=document.getElementById("alert");
        alertP.innerHTML=`
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Enter Name!</strong> Please provide name.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        `; 
    }
    else{
        //end key modified url      
        var url="https://api.nationalize.io/?name="+searchName;
    }
    

    //featching data and also handling errors
    try{
        const responce=await fetch(url);
        const countries= await responce.json();
        displayData(countries);
        urlLink.setAttribute("href",url);
        requestStatus.innerHTML="Request Status: <span class='success'>Success</span>";
    }
    catch{ 
        requestStatus.innerHTML="Request Status: <span class='fail'>Failure</span>"
    }


};
