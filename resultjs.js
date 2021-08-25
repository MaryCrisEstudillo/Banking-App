
////////////menu buttons///////////
//SEARCH FORM DOM//
   let searchIconContainer = document.getElementById('searchIconContainer');
   let searchIconBtn = document.getElementById('iconsOne');
   let search = document.getElementById('searchFormContainer');
   let searchBtn = document.getElementById('searchbutton');
   let searcFName = document.getElementById('searchFirstName');
   let searcLName = document.getElementById('searchFirstName');
   let searchAccountNum = document.getElementById('searchAccount');
   let searchResultContainer = document.getElementById('searchResult');
   let getBalanceContainer = document.getElementById('getBalance');

//HISTORY FORM DOM//
   let historyIconBtn = document.getElementById('iconsTwo');
   let history = document.getElementById('historyContainer');
   let table = document.querySelector('tr');
//ADD USER FORM DOM//
   let addUserIconBtn = document.getElementById('iconsThree');
   let addUser = document.getElementById('aduserInputContainer'); //line 189
   let addUserContainer = document.getElementById('aduserIconContainer');
   let addButton = document.getElementById('addButton');
   let addUserAccount = document.getElementById('accountAduser');
   let addUserfirstName = document.getElementById('fIrstNameAduser');
   let addUserlastName = document.getElementById('lastNameAduser');
   let addUserDob = document.getElementById('dateofBirth');
   let addUserDeposit = document.getElementById('initialDepositAduser');

 
   
//TRANSACTION FORM DOM//
   let transacIconBtn = document.getElementById('iconsFour');
   let showMenuTransac = document.getElementById('titleTransac');
   let blueTabTransac = document.getElementById('transacIconContainer');

    //DEPOSIT FORM DOM//
        let depositContainer = document.getElementById('depoContainer');
        let depoAccountNum = document.getElementById('depoaccountNumber');
        let depositAmount = document.getElementById('depoAmount');
        let depoMenubtn= document.querySelector('#depositBtn');
        let depoSubmitBtn = document.getElementById('depoButtonId');
        let depoFirstName = document.getElementById('transacfirstName');
        let depoLastName = document.getElementById('transaclastName');
    //WITHDRAW FORM DOM// 
        let withdrawMenuBtn = document.querySelector('#WithdrawBtn');
        let withdrawFormOnly =document.getElementById('withdrawForm');
        let withdrawSubmitBtn = document.getElementById('withdrawButtonId');
        let withdrawAccountNum = document.getElementById('withdrawccountNumber');
        let withDrawAmount = document.getElementById('withdrawAmount');
        let withDrawFirstName = document.getElementById('withdrawfirstName');
        let withDrawLastName = document.getElementById('withdrawlastName');
    //TRANSFER FORM DOM//
        let transfer = document.getElementById('transferContainer');
        let senderAmount = document.getElementById('sendAmount');
        let senderAccountNum = document.getElementById('senderAccountNumber');
        let sendFirstName = document.getElementById('transacfirstName1');
        let sendLastName = document.getElementById('transacmiddleName1');
        let receiverAccountNum = document.getElementById('receiverAccountNumber');
        let transferMenuBtn = document.getElementById('TransferBtn');     
        let transferSubmitBtn = document.getElementById('transferButtonId');
        let receiverFirstName = document.getElementById('transacfirstName2');
        let receiverLastName = document.getElementById('transacmiddleName2');
    //HIDE BUTTON DOM//
        let hideSearch = document.getElementById('hideBtnSearch');
        let hidehistory = document.getElementById('hideBtnHistory');
        let hideAddUser = document.getElementById('hideBtnAduser');
        let hideTransac = document.getElementById('hideBtnWithdraw');

//MODAL//
let modalContainer = document.getElementById('modal');
let modalBox = document.getElementById('modalBox');
let modalClose = document.getElementById('closeModal');

//MENU BUTTONS//

function showSearch(){
    //make the search menu container visible//
    searchIconContainer.style.display = "block"
    searchIconBtn.src = "images/search.png";
    search.style.visibility = 'visible';
    historyIconBtn.src = "images/historyfix.png";
    addUserIconBtn.src = "images/add userfix.png";
    transacIconBtn.src = "images/transactionfix.png"
    hideSearch.style.visibility = 'visible';
    
    
    //hide other menus//
    history.style.visibility = 'hidden';
    addUser.style.visibility = 'hidden';
    addUserContainer.style.visibility = 'hidden';
    showMenuTransac.style.visibility = 'hidden';
    blueTabTransac.style.visibility = 'hidden';
    depositContainer.style.visibility = 'hidden';
    withdrawFormOnly.style.visibility = 'hidden';
    transfer.style.visibility = 'hidden';
    hidehistory.style.visibility = 'hidden' 
    hideAddUser.style.visibility = 'hidden'
    hideTransac.style.visibility = 'hidden'}
   
function showHistory(){
    //make the history menu container visible//
    historyIconBtn.src = "images/history.png";
    history.style.visibility = 'visible';
    searchIconBtn.src = "images/searchfix.png";
    addUserIconBtn.src = "images/add userfix.png";
    transacIconBtn.src = "images/transactionfix.png";
    hidehistory.style.visibility = 'visible';

    //hide other menus//
    search.style.visibility = 'hidden';
    addUser.style.visibility = 'hidden';
    addUserContainer.style.visibility = 'hidden';
    showMenuTransac.style.visibility = 'hidden';
    blueTabTransac.style.visibility = 'hidden';
    depositContainer.style.visibility = 'hidden';
    withdrawFormOnly.style.visibility = 'hidden';
    transfer.style.visibility = 'hidden';
    hideSearch.style.visibility = 'hidden'
    hideAddUser.style.visibility = 'hidden'
    hideTransac.style.visibility = 'hidden'
    searchResultContainer.style.visibility = 'hidden'
    getBalanceContainer.style.visibility = 'hidden'
    searchIconContainer.style.display = "none"}
   
function showAdduser(){
    //make the history menu container visible//
    addUserIconBtn.src = "images/add user.png";
    addUser.style.visibility = 'visible';
    addUserContainer.style.visibility = 'visible';
    searchIconBtn.src = "images/searchfix.png";
    historyIconBtn.src = "images/historyfix.png";
    transacIconBtn.src = "images/transactionfix.png";
    hideAddUser.style.visibility = 'visible';

    //hide other menus//
    search.style.visibility = 'hidden';
    history.style.visibility = 'hidden';
    showMenuTransac.style.visibility = 'hidden';
    blueTabTransac.style.visibility = 'hidden';
    depositContainer.style.visibility = 'hidden';
    withdrawFormOnly.style.visibility = 'hidden';
    transfer.style.visibility = 'hidden';
    hideSearch.style.visibility = 'hidden'
    hidehistory.style.visibility = 'hidden' 
    hideTransac.style.visibility = 'hidden'
    searchResultContainer.style.visibility = 'hidden'
    getBalanceContainer.style.visibility = 'hidden'
    searchIconContainer.style.display = "none"}
   
function showTransac(){
    //make the history menu container visible//
    transacIconBtn.src = "images/transaction.png";
    showMenuTransac.style.visibility = 'visible';
    blueTabTransac.style.visibility = 'visible';
    searchIconBtn.src = "images/searchfix.png";
    addUserIconBtn.src = "images/add userfix.png";
    historyIconBtn.src = "images/historyfix.png";
    hideTransac.style.visibility = 'visible';
    
    //hide other menus//
    search.style.visibility = 'hidden';
    history.style.visibility = 'hidden';
    addUser.style.visibility = 'hidden';
    addUserContainer.style.visibility = 'hidden';
    withdrawFormOnly.style.visibility = 'hidden';
    transfer.style.visibility = 'hidden';
    searchResultContainer.style.visibility = 'hidden'
    getBalanceContainer.style.visibility = 'hidden'
    searchIconContainer.style.display = "none"
    //KEEP TRANSACTION DEPOSIT//
    depositContainer.style.visibility = 'visible';
    depoMenubtn.style.backgroundColor = '#005EFF';
    depoMenubtn.style.border = 'none';
    depoMenubtn.style.color = 'white';
    withdrawMenuBtn.style.backgroundColor = '#005EFF';
    withdrawMenuBtn.style.border = 'none';
    withdrawMenuBtn.style.color = 'white';
    transferMenuBtn.style.backgroundColor = '#005EFF'
    transferMenuBtn.style.border = 'none';
    transferMenuBtn.style.color = 'white';
    hideSearch.style.visibility = 'hidden'
    hidehistory.style.visibility = 'hidden' 
    hideAddUser.style.visibility = 'hidden'}

///SHOW TRANSACTION FORMS MENU BY CLICK/// 

   function depoForm(){
    depositContainer.style.visibility = 'visible';
    depoMenubtn.style.backgroundColor = 'white'
    depoMenubtn.style.border = '.2vw solid #005EFF';
    depoMenubtn.style.color = '#005EFF';
    //MAKE OTHER TRANSACTION MENU FORMS HIDDEN//
    withdrawFormOnly.style.visibility = 'hidden';
    transfer.style.visibility = 'hidden';
    searchIconContainer.style.display = "none"
    //MAKE OTHER TRANSACTION MENU BUTTONS REGULAR STYLE//
    withdrawMenuBtn.style.backgroundColor = '#005EFF';
    withdrawMenuBtn.style.border = 'none';
    withdrawMenuBtn.style.color = 'white';
    transferMenuBtn.style.backgroundColor = '#005EFF'
    transferMenuBtn.style.border = 'none';
    transferMenuBtn.style.color = 'white';}

   function withdrawForm(){
    withdrawFormOnly.style.visibility = 'visible';
    withdrawMenuBtn.style.backgroundColor = 'white'
    withdrawMenuBtn.style.border = '.2vw solid #005EFF';
    withdrawMenuBtn.style.color = '#005EFF';
    //MAKE OTHER TRANSACTION MENU FORMS HIDDEN//
    depositContainer.style.visibility = 'hidden';
    transfer.style.visibility = 'hidden';
    searchIconContainer.style.display = "none"
    //MAKE OTHER TRANSACTION MENU BUTTONS REGULAR STYLE//
    depoMenubtn.style.backgroundColor = '#005EFF';
    depoMenubtn.style.border = 'none';
    depoMenubtn.style.color = 'white';
    transferMenuBtn.style.backgroundColor = '#005EFF'
    transferMenuBtn.style.border = 'none';
    transferMenuBtn.style.color = 'white';}

   function TransFer(){
    transfer.style.visibility = 'visible';
    transferMenuBtn.style.backgroundColor = 'white'
    transferMenuBtn.style.border = '.2vw solid #005EFF';
    transferMenuBtn.style.color = '#005EFF';
    //MAKE OTHER TRANSACTION MENU FORMS HIDDEN//
    depositContainer.style.visibility = 'hidden';
    withdrawFormOnly.style.visibility = 'hidden';
    searchIconContainer.style.display = "none"
    //MAKE OTHER TRANSACTION MENU BUTTONS REGULAR STYLE//
    withdrawMenuBtn.style.backgroundColor = '#005EFF';
    withdrawMenuBtn.style.border = 'none';
    withdrawMenuBtn.style.color = 'white';
    depoMenubtn.style.backgroundColor = '#005EFF';
    depoMenubtn.style.border = 'none';
    depoMenubtn.style.color = 'white';}

    function hide_all(){
        search.style.visibility = 'hidden';
        history.style.visibility = 'hidden';
        addUser.style.visibility = 'hidden';
        addUserContainer.style.visibility = 'hidden';
        withdrawFormOnly.style.visibility = 'hidden';
        showMenuTransac.style.visibility = 'hidden';
        blueTabTransac.style.visibility = 'hidden';
        depositContainer.style.visibility = 'hidden';
        transfer.style.visibility = 'hidden';
        hideSearch.style.visibility = 'hidden'
        hidehistory.style.visibility = 'hidden' 
        hideAddUser.style.visibility = 'hidden'
        hideTransac.style.visibility = 'hidden'
        historyIconBtn.src = "images/historyfix.png";
        addUserIconBtn.src = "images/add userfix.png";
        transacIconBtn.src = "images/transactionfix.png";
        searchIconBtn.src = "images/searchfix.png";
        searchResultContainer.style.visibility = 'hidden'
        getBalanceContainer.style.visibility = 'hidden'
        searchIconContainer.style.display = "none"
        

    }
///CLOSE MODAL///

function closeAllModals(){
    modalContainer.style.visibility = 'hidden'
    modalBox.style.visibility = 'hidden'
    modalClose.style.visibility = 'hidden'
}


//GETNAME//
window.addEventListener('load', ()=> {
    const params = (new URL(document.location)).searchParams;
    const name = params.get('userName');

    document.getElementById('introName').innerHTML =`${name}!`;
})

//input validity//

//TIME AND DATE//
months = ['Jan.', 'Feb.', 'March', 'April', 'May','June', 'July', 'Aug.','Sept.', 'Oct', 'Nov.', 'Dec.'];
days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

// get day
datedata = new Date();
currentday = datedata.getDay();
let today = document.getElementById('day').textContent= days[currentday]+",";

currentmonth = datedata.getMonth();
currentdate = datedata.getDate();
currentyear = datedata.getFullYear();
document.getElementById('dateForEmployee').textContent = `${months[currentmonth]} ${currentdate}, ${currentyear}`;

//get time
currenthour = datedata.getHours()
currentminutes = datedata.getMinutes()
local = datedata.toLocaleTimeString([],{timeStyle:"short"});
let times = document.getElementById("timeForEmployee").innerHTML = local;

//QUOTES//
let myArray = ["Quality means doing it right when no one is looking.",
"Stay positive, workhard and make it happen.",
"Don't limit yourself to challenges, instead Challenge your limits!",
"Alone we can do so little but together we can do so much.",
"Workhard, be kind and amazing thing will happen.",
"Strive not to be a success but rather to be of value."];


let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
let quoteresult = document.getElementById('quotes').innerHTML = randomItem;


//adduser//

class NewUserRef { 
    constructor (accountNumber, firstName, lastName, date, time, amount){
        this.accountNumber  = accountNumber;
        this.firstName      = firstName;
        this.lastName       = lastName;
        this.historyDetails = [];
        this.date           = date;
        this.time           = time;
        this.amount         = amount;
    }
}

class FunctionClass {
    static storeInput(){
        let storeUser;
        if (localStorage.getItem('inputValue')===null){
            storeUser = [];
        } else {
            storeUser = JSON.parse(localStorage.getItem('inputValue'));
        }
        return storeUser;
    }
    static usertoAdd(newUser){
        const storeUser = FunctionClass.storeInput();
        storeUser.push(newUser);
        localStorage.setItem('inputValue', JSON.stringify(storeUser));
    }
    static getTimeUser(){
        let time = new Date();
        let twelveHrsBe = time.getHours()%12?time.getHours()%12:12;
        let hoursBe = twelveHrsBe<10?`0${twelveHrsBe}`:twelveHrsBe;
        let minutesBe = time.getMinutes()<10?`0${time.getMinutes()}`:time.getMinutes();
        let amPm = time.getHours()>=12?"PM":"AM";
        let timeFinal = `${hoursBe}:${minutesBe} ${amPm}`;
        return timeFinal;
    }

    static getDateUser(){
        let dateNew = new Date();
        let daysBe = dateNew.getDate()<10?`0${dateNew.getDate()}`:dateNew.getDate();
        let monthsBe = dateNew.getMonth()<10?`0${dateNew.getMonth()+1}`:dateNew.getMonth()+1;
        let yearsBe = dateNew.getFullYear();
        let dateFinal = `${monthsBe}/${daysBe}/${yearsBe}`; 
        return dateFinal;
    }
    static withdraw(firstNameWithdraw, lastNameWithdraw, user, amount){
        const storeUser = FunctionClass.storeInput();
        let checkFirstName = storeUser.findIndex((index)=> index.firstName == firstNameWithdraw);
        let checklastName = storeUser.findIndex((index)=> index.lastName == lastNameWithdraw);
        let checkAccountNum = storeUser.findIndex((index)=> index.accountNumber == user);
        // const remainingBal = parseFloat(storeUser[checkAccountNum].amount);
        // const withdrawAmount = parseFloat(amount);
        if(storeUser[checkFirstName]== null || storeUser[checkFirstName]=="" || storeUser[checklastName]== null ||
         storeUser[checklastName]=="" || storeUser[checkAccountNum]==null || storeUser[checkAccountNum]==""){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'User does not exist!'
            modalClose.style.visibility ="visible"
        } else if(parseFloat(storeUser[checkAccountNum].amount) < parseFloat(amount)){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'Not Enough Money!'
            modalClose.style.visibility ="visible"
        }else if(parseFloat(amount) <= 0){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'Deposit cannot be negative or zero!'
            modalClose.style.visibility ="visible"

        }else if((amount)==""){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'You must enter an amount!'
            modalClose.style.visibility ="visible"
        }else{
            storeUser[checkAccountNum].amount = parseFloat((storeUser[checkAccountNum].amount)-(amount)).toFixed(2);
            const historyOutput = `You withdrew an amount of Php ${amount} for ${storeUser[checkAccountNum].firstName}'s bank account.`;
            storeUser[checkAccountNum].historyDetails.push(historyOutput);
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'Withdraw Successful!'
            modalClose.style.visibility ="visible"
        }

        localStorage.setItem('inputValue', JSON.stringify(storeUser))
    }
    static deposit(firstNameDeposit, lastNameDeposit, user, amount){
        const storeUser = FunctionClass.storeInput();
        let checkFirstName = storeUser.findIndex((index)=> index.firstName == firstNameDeposit);
        let checklastName = storeUser.findIndex((index)=> index.lastName == lastNameDeposit);
        let checkAccountNum = storeUser.findIndex((index)=> index.accountNumber == user);
        if(storeUser[checkFirstName]==null || storeUser[checkFirstName]=="" || storeUser[checklastName]==null || 
        storeUser[checklastName]=="" || storeUser[checkAccountNum]==null || storeUser[checkAccountNum]=="" ){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'User does not exist!'
            modalClose.style.visibility ="visible"
        }else if(parseFloat(amount) <= 0){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'Deposit cannot be negative or zero!'
            modalClose.style.visibility ="visible"

        }else if((amount)==""){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'You must enter an amount!'
            modalClose.style.visibility ="visible"
        }
        else{
            // const remainingBal = parseFloat(storeUser[checkAccountNum].amount);
            // const depositAmount = parseFloat(amount);
            storeUser[checkAccountNum].amount = parseFloat((storeUser[checkAccountNum].amount)+(amount)).toFixed(2);
            const historyOutput = `You deposit an amount of Php${amount} for ${storeUser[checkAccountNum].firstName}'s bank account.`;
            storeUser[checkAccountNum].historyDetails.push(historyOutput);
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'Deposit Successful!'
            modalClose.style.visibility ="visible"
            
        }

        localStorage.setItem('inputValue', JSON.stringify(storeUser));
    }
    static send(firstNameSender, lastNameSender, firstNameReceiver, lastNameReceiver, from_user, to_user, amount){
        const storeUser = FunctionClass.storeInput();
        let senderFirstName = storeUser.findIndex((index)=> index.firstName == firstNameSender);
        let senderlastName = storeUser.findIndex((index)=> index.lastName == lastNameSender);
        let receiverFirstName = storeUser.findIndex((index)=> index.firstName == firstNameReceiver);
        let receiverlastName = storeUser.findIndex((index)=> index.lastName == lastNameReceiver);
        let checkAccountNum = storeUser.findIndex((index)=> index.accountNumber == from_user);
        let checkAccountNum2 = storeUser.findIndex((index)=> index.accountNumber == to_user);
        if(storeUser[senderFirstName]==null || storeUser[senderFirstName]=="" || storeUser[senderlastName]==null || storeUser[senderlastName]=="" || 
        storeUser[receiverFirstName]==null || storeUser[receiverFirstName]=="" || storeUser[receiverlastName]==null || storeUser[receiverlastName]=="" || 
        storeUser[checkAccountNum]==null || storeUser[checkAccountNum]=="" ||  storeUser[checkAccountNum2]==null || storeUser[checkAccountNum]==""){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'User does not exist!'
            modalClose.style.visibility ="visible"
        }else if(parseFloat(amount) <= 0){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'Deposit cannot be negative or zero!'
            modalClose.style.visibility ="visible"

        }else if((amount)==""){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'You must enter an amount!'
            modalClose.style.visibility ="visible"

        }else{
            const remainingBal = parseFloat(storeUser[checkAccountNum].amount);
            const remainingBalTo = parseFloat(storeUser[checkAccountNum2].amount);
            const sendAmount = parseFloat(amount);
            storeUser[checkAccountNum].amount = parseFloat(remainingBal-sendAmount).toFixed(2);
            storeUser[checkAccountNum2].amount = parseFloat(sendAmount+remainingBalTo).toFixed(2);
            const historyOutput = `You send an amount of Php${amount} for ${storeUser[checkAccountNum].firstName}'s bank account to ${storeUser[checkAccountNum2].firstName}.`;
            storeUser[checkAccountNum].historyDetails.push(historyOutput);
            const historyOutputTo = `${storeUser[checkAccountNum2].firstName} received an amount of Php${amount} from ${storeUser[checkAccountNum].firstName}'s bank account.`;
            storeUser[checkAccountNum2].historyDetails.push(historyOutputTo);
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'Transfer Successful!'
            modalClose.style.visibility ="visible"
        }

        localStorage.setItem('inputValue', JSON.stringify(storeUser));
    }
    static get_balance(user){
        const storeUser = FunctionClass.storeInput();
        let checkAccountNum = storeUser.findIndex((index)=> index.accountNumber == user);
        if(storeUser[checkAccountNum]){
            document.getElementById('getBalance').textContent = `${storeUser[checkAccountNum].firstName} ${storeUser[checkAccountNum].lastName}'s current balance is now Php ${storeUser[checkAccountNum].amount}`
        }
    }
    static list_users(){
        const storeUser = FunctionClass.storeInput();
        document.getElementById('historyInput').innerHTML = "";
        for(let i=0; i<storeUser.length; i++){
            let createTr = document.createElement('tr');
            let createTdAccount = document.createElement('td');
            let createTdName = document.createElement('td');
            let createTdDate = document.createElement('td');
            let createTdTime = document.createElement('td');
            let createTdBalance = document.createElement('td');
            createTdAccount.textContent = storeUser[i].accountNumber;
            createTdName.textContent = `${storeUser[i].firstName} ${storeUser[i].lastName}`;
            createTdDate.textContent = storeUser[i].date;
            createTdTime.textContent = storeUser[i].time;
            createTdBalance.textContent = `Php ${storeUser[i].amount}`;
            createTr.appendChild(createTdAccount);
            createTr.appendChild(createTdName);
            createTr.appendChild(createTdDate);
            createTr.appendChild(createTdTime);
            createTr.appendChild(createTdBalance);
            document.getElementById('historyInput').appendChild(createTr);
        }
    }
    static searchResult(firstNameSearch, lastNameSearch, user){
        const storeUser = FunctionClass.storeInput();
        let checkFirstName = storeUser.findIndex((index)=> index.firstName == firstNameSearch);
        let checklastName = storeUser.findIndex((index)=> index.lastName == lastNameSearch);
        let checkAccountNum = storeUser.findIndex((index)=> index.accountNumber == user);
        if (!storeUser[checkFirstName] && !storeUser[checklastName] && !storeUser[checkAccountNum]){
            modalContainer.style.visibility ="visible"
            modalBox.style.visibility ="visible"
            modalBox.innerHTML = 'User does not exist!'
            modalClose.style.visibility ="visible"
        }else{
            // const searchUser = new NewUserRef(firstName, lastName, accountNumber, user);
            // FunctionClass.history_users(searchUser)
            searchResultContainer.innerHTML = "";
            FunctionClass.get_balance(user);
            if(storeUser[checkAccountNum].historyDetails.length == 0){
                let createTr = document.createElement('tr');
                let createTdHistory = document.createElement('td');
                createTdHistory.textContent = 'No transaction yet';
                createTr.appendChild(createTdHistory);
                searchResultContainer.appendChild(createTr);
            }else{

                for(let i=0; i<storeUser[checkAccountNum].historyDetails.length; i++){
                    let createTr = document.createElement('tr');
                    let createTdHistory = document.createElement('td');
                    createTdHistory.textContent = storeUser[checkAccountNum].historyDetails[i];
                    createTr.appendChild(createTdHistory);
                    searchResultContainer.appendChild(createTr);
                }
            }
        }
    }
}

FunctionClass.list_users();

function create_user(accountNumber, firstName, lastName, date, time, amount){
    const storeUser = FunctionClass.storeInput();
    let checkFirstName = storeUser.findIndex((index)=> index.firstName == firstName);
    let checklastName = storeUser.findIndex((index)=> index.lastName == lastName);
    if(storeUser[checkFirstName] && storeUser[checklastName]){
        modalContainer.style.visibility ="visible"
        modalBox.style.visibility ="visible"
        modalBox.innerHTML = 'User already exist!'
        modalClose.style.visibility ="visible"
    }else{
    const newUser = new NewUserRef(accountNumber, firstName, lastName, date, time, amount);
    FunctionClass.usertoAdd(newUser);    
    modalContainer.style.visibility ="visible"
    modalBox.style.visibility ="visible"
    modalBox.innerHTML = 'New User Successfully Added!'
    modalClose.style.visibility ="visible"
}
}

document.getElementById('toLoad').addEventListener('click', ()=>{
    const randomAccountNum = Math.floor(Math.random()*90000000000) + 10000000000;
    const randomAccountNum1 = Math.floor(Math.random()*90000000000) + 10000000000;
    const randomAccountNum2 = Math.floor(Math.random()*90000000000) + 10000000000;
    create_user(randomAccountNum, 'KEANU', 'REEVES', FunctionClass.getDateUser(), FunctionClass.getTimeUser(), 500)
    create_user(randomAccountNum1, 'PARK', 'SEOJOON', FunctionClass.getDateUser(), FunctionClass.getTimeUser(), 1000)
    create_user(randomAccountNum2, 'PARK', 'BOGUM', FunctionClass.getDateUser(), FunctionClass.getTimeUser(), 1500)
})

addUser.addEventListener('submit', (e)=>{
    e.preventDefault();
    const randomAccountNum = Math.floor(Math.random()*90000000000) + 10000000000;
    create_user(randomAccountNum, addUserfirstName.value.toUpperCase(), addUserlastName.value.toUpperCase(), FunctionClass.getDateUser(), FunctionClass.getTimeUser(),addUserDeposit.value);
    FunctionClass.list_users();
    addUser.reset();
});



document.getElementById('withdrawForm').addEventListener('submit', (e)=>{
        e.preventDefault();
        FunctionClass.withdraw(withDrawFirstName.value.toUpperCase(), withDrawLastName.value.toUpperCase(), withdrawAccountNum.value,  withDrawAmount.value);
        FunctionClass.list_users();
        withdrawFormOnly.reset();
    });

document.getElementById('depoContainer').addEventListener('submit', (e)=>{
        e.preventDefault();
        FunctionClass.deposit(depoFirstName.value.toUpperCase(), depoLastName.value.toUpperCase(), depoAccountNum.value, depositAmount.value );
        FunctionClass.list_users();
        depositContainer.reset();
    });


transfer.addEventListener('submit', (e)=>{
    e.preventDefault();
    FunctionClass.send(sendFirstName.value.toUpperCase(), sendLastName.value.toUpperCase(), receiverFirstName.value.toUpperCase(), receiverLastName.value.toUpperCase(), senderAccountNum.value, receiverAccountNum.value, senderAmount.value);
    FunctionClass.list_users();
    document.getElementById("userTransferForm").reset();
    document.getElementById("receiverTransferForm").reset();
});

search.addEventListener('submit', (e)=>{
    e.preventDefault();
    FunctionClass.searchResult(searcFName.value.toUpperCase(), searcLName.value.toUpperCase(), searchAccountNum.value);
    searchResultContainer.style.visibility = 'visible'
    getBalanceContainer.style.visibility = 'visible'
    searchIconBtn.src = "images/searchfix.png";
    search.style.visibility = 'hidden';
    hideSearch.style.visibility = 'hidden'
    // FunctionClass.history_users();
    search.reset()
});




