
////////////menu buttons///////////
//SEARCH FORM DOM//
   let searchIconBtn = document.getElementById('iconsOne');
   let search = document.getElementById('searchFormContainer');
   let searcFName = document.getElementById('searchFirstName');
   let searcLName = document.getElementById('searchLastName');
   let searchAccountNum = document.getElementById('searchAccount');
   let searchResultContainer = document.getElementById('searchResult');
   let getBalanceContainer = document.getElementById('getBalance');

//HISTORY FORM DOM//
   let historyIconBtn = document.getElementById('iconsTwo');
   let history = document.getElementById('historyContainer');
//ADD USER FORM DOM//
   let addUserIconBtn = document.getElementById('iconsThree');
   let addUser = document.getElementById('aduserInputContainer');
   let addUserfirstName = document.getElementById('fIrstNameAduser');
   let addUserlastName = document.getElementById('lastNameAduser');
   let addUserDob = document.getElementById('dateofBirthAduser');
   let addUserDeposit = document.getElementById('initialDepositAduser');


//TRANSACTION FORM DOM//
   let transacIconBtn = document.getElementById('iconsFour');
   let showMenuTransac = document.getElementById('titleTransac');

    //DEPOSIT FORM DOM//
        let depositContainer = document.getElementById('depoContainer');
        let depoAccountNum = document.getElementById('depoaccountNumber');
        let depositAmount = document.getElementById('depoAmount');
        let depoMenubtn= document.querySelector('#depositBtn');
        let depoFirstName = document.getElementById('transacfirstName');
        let depoLastName = document.getElementById('transaclastName');
    //WITHDRAW FORM DOM//
        let withdrawMenuBtn = document.querySelector('#WithdrawBtn');
        let withdrawFormOnly =document.getElementById('withdrawForm');
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
        let receiverFirstName = document.getElementById('transacfirstName2');
        let receiverLastName = document.getElementById('transacmiddleName2');
    //HIDE BUTTON DOM//
        let hideSearch = document.getElementById('hideBtnSearch');
        let hidehistory = document.getElementById('hideBtnHistory');
        let hideAddUser = document.getElementById('hideBtnAduser');
        let hideTransac = document.getElementById('hideBtnWithdraw');

//ACCOUNT PICKER — ONE LIST, MOVED INTO WHICHEVER FIELD IS ACTIVE SO IT ALWAYS
//OPENS FLUSH UNDER THAT FIELD (A NATIVE <datalist> CANNOT BE POSITIONED)//
const pickList = document.createElement('ul');
pickList.id = 'pickList';
pickList.className = 'pickList';
pickList.setAttribute('role', 'listbox');
pickList.hidden = true;

//THE THREE FIELDS THAT IDENTIFY ONE ACCOUNT, PER TRANSACTION FORM//
const accountFieldGroups = {
    deposit:  {first: 'transacfirstName',  last: 'transaclastName',    account: 'depoaccountNumber'},
    withdraw: {first: 'withdrawfirstName', last: 'withdrawlastName',   account: 'withdrawccountNumber'},
    sender:   {first: 'transacfirstName1', last: 'transacmiddleName1', account: 'senderAccountNumber'},
    receiver: {first: 'transacfirstName2', last: 'transacmiddleName2', account: 'receiverAccountNumber'}
};

//MODAL//
let modalContainer = document.getElementById('modal');
let modalBox = document.getElementById('modalBox');
let modalText = document.getElementById('modalText');
let modalQuestion = document.getElementById('modalQuestion');
let modalClose = document.getElementById('closeModal');
let modalYes = document.getElementById('modalYes');
let modalNo = document.getElementById('modalNo');

//NAV ICONS: the chosen one is scaled up, no background shape//
function setActiveIcon(icon){
    [searchIconBtn, historyIconBtn, addUserIconBtn, transacIconBtn].forEach((railIcon)=>{
        const isOn = railIcon === icon;
        railIcon.classList.toggle('isActive', isOn);              //glyph turns blue
        const item = railIcon.closest('.rail-item');
        item.classList.toggle('isActive', isOn);
    });
}

//MENU BUTTONS — one table and one switcher. Adding a menu is a row here rather
//than an edit in five near-identical functions.//
const MENUS = {
    search:  {panel: search,          closeBtn: hideSearch,  icon: searchIconBtn,
              keepResults: true},                    //results survive reopening the form
    history: {panel: history,         closeBtn: hidehistory, icon: historyIconBtn,
              onShow: ()=> FunctionClass.list_users()},
    adduser: {panel: addUser,         closeBtn: hideAddUser, icon: addUserIconBtn},
    transac: {panel: showMenuTransac, closeBtn: hideTransac, icon: transacIconBtn,
              onShow: ()=> depoForm()}               //transactions open on Deposit
};

function showOnly(name){
    const chosen = MENUS[name] || null;
    clearAllGroupErrors();
    setActiveIcon(chosen && chosen.icon);

    Object.values(MENUS).forEach((menu)=>{
        const isOpen = menu === chosen;
        menu.panel.style.visibility = isOpen ? 'visible' : 'hidden';
        menu.closeBtn.style.visibility = isOpen ? 'visible' : 'hidden';
    });

    //the transaction sub-forms are only ever revealed by their own tab
    depositContainer.style.visibility = 'hidden';
    withdrawFormOnly.style.visibility = 'hidden';
    transfer.style.visibility = 'hidden';

    if(!(chosen && chosen.keepResults)){
        searchResultContainer.style.visibility = 'hidden';
        getBalanceContainer.style.visibility = 'hidden';
    }
    if(chosen && chosen.onShow) chosen.onShow();
}

function showSearch(){  showOnly('search');  }
function showHistory(){ showOnly('history'); }
function showAdduser(){ showOnly('adduser'); }
function showTransac(){ showOnly('transac'); }
function hide_all(){    showOnly(null);      }

///SHOW TRANSACTION FORMS MENU BY CLICK — the open tab carries a class, so its
///colours stay in the stylesheet with the rest of the palette.///
const TRANSAC_TABS = [
    {tab: depoMenubtn,     form: depositContainer},
    {tab: withdrawMenuBtn, form: withdrawFormOnly},
    {tab: transferMenuBtn, form: transfer}
];

function showTransacForm(activeTab){
    clearAllGroupErrors();
    TRANSAC_TABS.forEach(({tab, form})=>{
        const isOpen = tab === activeTab;
        tab.classList.toggle('isActive', isOpen);
        form.style.visibility = isOpen ? 'visible' : 'hidden';
    });
}

function depoForm(){     showTransacForm(depoMenubtn);     }
function withdrawForm(){ showTransacForm(withdrawMenuBtn); }
function TransFer(){     showTransacForm(transferMenuBtn); }

///MODAL///

//showModal(message) gives a plain Ok. Passing a `choice` turns it into a
//question with Yes/No, e.g. asking whether to keep the form open.//
let pendingChoice = null;

function showModal(message, choice){
    modalText.textContent = message;
    pendingChoice = choice || null;

    modalQuestion.hidden = !pendingChoice;
    modalQuestion.textContent = pendingChoice ? pendingChoice.question : "";
    modalClose.hidden = Boolean(pendingChoice);
    modalYes.hidden = !pendingChoice;
    modalNo.hidden = !pendingChoice;

    modalContainer.style.visibility = 'visible'
    modalBox.style.visibility = 'visible'
    document.body.classList.add('modalOpen');   //drives the fade/scale in
    (pendingChoice ? modalYes : modalClose).focus();   //so Enter or Space answers it
}

function closeAllModals(){
    modalContainer.style.visibility = 'hidden'
    modalBox.style.visibility = 'hidden'
    document.body.classList.remove('modalOpen');
    pendingChoice = null;
}

//answering runs the callback after the modal is out of the way
function answerChoice(reply){
    const choice = pendingChoice;
    closeAllModals();
    if(choice && choice[reply]) choice[reply]();
}
modalYes.addEventListener('click', ()=> answerChoice('onYes'));
modalNo.addEventListener('click', ()=> answerChoice('onNo'));

///KEYBOARD SUPPORT FOR THE CLICKABLE ICONS, TABS AND X BUTTONS///
document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
        closeAllModals();
        return;
    }
    if(e.key !== 'Enter' && e.key !== ' ') return;
    const trigger = e.target.closest('[role="button"]');
    if(!trigger) return;
    e.preventDefault();
    trigger.click();
});


//GETNAME//
window.addEventListener('load', ()=> {
    const params = (new URL(document.location)).searchParams;
    const name = params.get('userName');

    //tellers are bank admins, so the role is shown alongside the name
    document.getElementById('introName').textContent = name ? `Teller ${name}!` : 'Teller';
})

//TIME AND DATE//
months = ['Jan.', 'Feb.', 'March', 'April', 'May','June', 'July', 'Aug.','Sept.', 'Oct', 'Nov.', 'Dec.'];
days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

const dayLabel = document.getElementById('day');
const dateLabel = document.getElementById('dateForEmployee');
const timeLabel = document.getElementById('timeForEmployee');

//The display has minute resolution, so most ticks would rewrite the same three
//strings. Only touch a node when its text actually changes.
function setText(node, text){
    if(node.textContent !== text) node.textContent = text;
}

function updateClock(){
    const datedata = new Date();
    setText(dayLabel, days[datedata.getDay()] + ",");
    setText(dateLabel, `${months[datedata.getMonth()]} ${datedata.getDate()}, ${datedata.getFullYear()}`);
    setText(timeLabel, datedata.toLocaleTimeString([], {timeStyle: "short"}));
}
updateClock();
setInterval(updateClock, 15000);

//QUOTES//
let myArray = ["Quality means doing it right when no one is looking.",
"Stay positive, workhard and make it happen.",
"Don't limit yourself to challenges, instead Challenge your limits!",
"Alone we can do so little but together we can do so much.",
"Workhard, be kind and amazing thing will happen.",
"Strive not to be a success but rather to be of value."];


let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
document.getElementById('quotes').textContent = randomItem;


//adduser//

class NewUserRef {
    constructor (accountNumber, firstName, lastName, date, time, amount, dateOfBirth = ''){
        this.accountNumber  = accountNumber;
        this.firstName      = firstName;
        this.lastName       = lastName;
        this.historyDetails = [];
        this.date           = date;
        this.time           = time;
        this.amount         = FunctionClass.toAmount(amount);
        this.dateOfBirth    = dateOfBirth;
    }
}

class FunctionClass {
    //MONEY HELPERS: keep balances as numbers, render them as Php 1,500.00//
    static toAmount(value){
        const amount = parseFloat(value);
        return Number.isFinite(amount) ? Number(amount.toFixed(2)) : 0;
    }
    static formatAmount(value){
        return FunctionClass.toAmount(value).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    //A TRANSACTION MUST MATCH ONE ACCOUNT: same number AND same account holder//
    static findAccount(storeUser, firstName, lastName, accountNumber){
        return storeUser.findIndex((user)=>
            String(user.accountNumber) === String(accountNumber) &&
            user.firstName === firstName &&
            user.lastName === lastName);
    }
    static storeInput(){
        //CORRUPT OR HAND EDITED STORAGE MUST NOT TAKE THE WHOLE APP DOWN//
        try {
            const saved = localStorage.getItem('inputValue');
            if (saved === null) return [];
            const storeUser = JSON.parse(saved);
            return Array.isArray(storeUser) ? storeUser : [];
        } catch (err) {
            console.error('Stored accounts could not be read, starting empty.', err);
            return [];
        }
    }
    //ACCOUNT NUMBERS MUST BE UNIQUE — TWO ACCOUNTS SHARING ONE IS UNRECOVERABLE//
    static newAccountNumber(){
        const storeUser = FunctionClass.storeInput();
        let candidate;
        do {
            candidate = Math.floor(Math.random()*90000000000) + 10000000000;
        } while (storeUser.some((user)=> String(user.accountNumber) === String(candidate)));
        return candidate;
    }
    static saveAll(storeUser){
        localStorage.setItem('inputValue', JSON.stringify(storeUser));
    }
    static usertoAdd(newUser){
        const storeUser = FunctionClass.storeInput();
        storeUser.push(newUser);
        FunctionClass.saveAll(storeUser);
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
        let monthNumber = dateNew.getMonth()+1;
        let monthsBe = monthNumber<10?`0${monthNumber}`:monthNumber;
        let yearsBe = dateNew.getFullYear();
        let dateFinal = `${monthsBe}/${daysBe}/${yearsBe}`;
        return dateFinal;
    }
    static withdraw(firstNameWithdraw, lastNameWithdraw, user, amount){
        const storeUser = FunctionClass.storeInput();
        const checkAccountNum = FunctionClass.findAccount(storeUser, firstNameWithdraw, lastNameWithdraw, user);
        const withdrawAmount = FunctionClass.toAmount(amount);

        if(checkAccountNum === -1){
            showModal('No matching account found.');
            return false;
        } else if(String(amount).trim() === ""){
            showModal('Enter an amount to continue.');
            return false;
        } else if(withdrawAmount <= 0){
            showModal('Enter a withdrawal amount greater than zero.');
            return false;
        } else if(FunctionClass.toAmount(storeUser[checkAccountNum].amount) < withdrawAmount){
            //quote the balance so the teller can offer the maximum straight away
            showModal(`Insufficient funds — this account has Php ${FunctionClass.formatAmount(storeUser[checkAccountNum].amount)} available.`);
            return false;
        } else {
            const remainingBal = FunctionClass.toAmount(storeUser[checkAccountNum].amount);
            storeUser[checkAccountNum].amount = FunctionClass.toAmount(remainingBal - withdrawAmount);
            const historyOutput = `Withdrawal of Php ${FunctionClass.formatAmount(withdrawAmount)}.`;
            storeUser[checkAccountNum].historyDetails.push(historyOutput);
            FunctionClass.saveAll(storeUser);
            return `Withdrawal of Php ${FunctionClass.formatAmount(withdrawAmount)} posted. New balance: Php ${FunctionClass.formatAmount(storeUser[checkAccountNum].amount)}.`;
        }
    }
    static deposit(firstNameDeposit, lastNameDeposit, user, amount){
        const storeUser = FunctionClass.storeInput();
        const checkAccountNum = FunctionClass.findAccount(storeUser, firstNameDeposit, lastNameDeposit, user);
        const depositAmount = FunctionClass.toAmount(amount);

        if(checkAccountNum === -1){
            showModal('No matching account found.');
            return false;
        } else if(String(amount).trim() === ""){
            showModal('Enter an amount to continue.');
            return false;
        } else if(depositAmount <= 0){
            showModal('Enter a deposit amount greater than zero.');
            return false;
        } else {
            const remainingBal = FunctionClass.toAmount(storeUser[checkAccountNum].amount);
            storeUser[checkAccountNum].amount = FunctionClass.toAmount(remainingBal + depositAmount);
            const historyOutput = `Deposit of Php ${FunctionClass.formatAmount(depositAmount)}.`;
            storeUser[checkAccountNum].historyDetails.push(historyOutput);
            FunctionClass.saveAll(storeUser);
            return `Deposit of Php ${FunctionClass.formatAmount(depositAmount)} posted. New balance: Php ${FunctionClass.formatAmount(storeUser[checkAccountNum].amount)}.`;
        }
    }
    static send(firstNameSender, lastNameSender, firstNameReceiver, lastNameReceiver, from_user, to_user, amount){
        const storeUser = FunctionClass.storeInput();
        const checkAccountNum  = FunctionClass.findAccount(storeUser, firstNameSender, lastNameSender, from_user);
        const checkAccountNum2 = FunctionClass.findAccount(storeUser, firstNameReceiver, lastNameReceiver, to_user);
        const sendAmount = FunctionClass.toAmount(amount);

        if(checkAccountNum === -1 || checkAccountNum2 === -1){
            showModal('No matching account found.');
            return false;
        } else if(checkAccountNum === checkAccountNum2){
            showModal('The sending and receiving accounts must be different.');
            return false;
        } else if(String(amount).trim() === ""){
            showModal('Enter an amount to continue.');
            return false;
        } else if(sendAmount <= 0){
            showModal('Enter a transfer amount greater than zero.');
            return false;
        } else if(FunctionClass.toAmount(storeUser[checkAccountNum].amount) < sendAmount){
            //two accounts are in play here, so name the one that is short
            showModal(`Insufficient funds — ${storeUser[checkAccountNum].firstName}'s account has Php ${FunctionClass.formatAmount(storeUser[checkAccountNum].amount)} available.`);
            return false;
        } else {
            const remainingBal = FunctionClass.toAmount(storeUser[checkAccountNum].amount);
            const remainingBalTo = FunctionClass.toAmount(storeUser[checkAccountNum2].amount);
            storeUser[checkAccountNum].amount = FunctionClass.toAmount(remainingBal - sendAmount);
            storeUser[checkAccountNum2].amount = FunctionClass.toAmount(remainingBalTo + sendAmount);
            const historyOutput = `Transfer of Php ${FunctionClass.formatAmount(sendAmount)} sent to ${FunctionClass.fullName(storeUser[checkAccountNum2])}.`;
            storeUser[checkAccountNum].historyDetails.push(historyOutput);
            const historyOutputTo = `Transfer of Php ${FunctionClass.formatAmount(sendAmount)} received from ${FunctionClass.fullName(storeUser[checkAccountNum])}.`;
            storeUser[checkAccountNum2].historyDetails.push(historyOutputTo);
            FunctionClass.saveAll(storeUser);
            return `Transfer of Php ${FunctionClass.formatAmount(sendAmount)} sent to ${FunctionClass.fullName(storeUser[checkAccountNum2])}. ${FunctionClass.fullName(storeUser[checkAccountNum])}'s new balance: Php ${FunctionClass.formatAmount(storeUser[checkAccountNum].amount)}.`;
        }
    }
    static get_balance(user){
        const storeUser = FunctionClass.storeInput();
        let checkAccountNum = storeUser.findIndex((index)=> index.accountNumber == user);
        if(storeUser[checkAccountNum]){
            getBalanceContainer.textContent = `Available balance for ${FunctionClass.fullName(storeUser[checkAccountNum])}: Php ${FunctionClass.formatAmount(storeUser[checkAccountNum].amount)}`
        }
    }
    //LOOK UPS USED BY THE PICKERS//
    static fullName(user){
        return `${user.firstName} ${user.lastName}`;
    }
    //These three take an optional already-read list. A single keystroke needs
    //several of them, and re-reading storage per call meant parsing the whole
    //account list four times per character typed.//
    static findByFullName(value, storeUser){
        const wanted = String(value).trim().toUpperCase().replace(/\s+/g, ' ');
        if(wanted === "") return null;
        return (storeUser || FunctionClass.storeInput())
            .find((user)=> FunctionClass.fullName(user) === wanted) || null;
    }
    static findByAccountNumber(value, storeUser){
        const wanted = String(value).trim();
        if(wanted === "") return null;
        return (storeUser || FunctionClass.storeInput())
            .find((user)=> String(user.accountNumber) === wanted) || null;
    }

    //ACCOUNTS MATCHING WHAT HAS BEEN TYPED//
    static matchingAccounts(text, searchBy, storeUser){
        const typed = String(text).trim().toUpperCase();
        return (storeUser || FunctionClass.storeInput())
            .filter((user)=>{
                if(typed === "") return true;
                const haystack = searchBy === 'account'
                    ? String(user.accountNumber)
                    : `${FunctionClass.fullName(user)} ${user.accountNumber}`;
                return haystack.includes(typed);
            })
            .sort((a, b)=> FunctionClass.fullName(a).localeCompare(FunctionClass.fullName(b)));
    }
    static list_users(){
        const storeUser = FunctionClass.storeInput();
        const historyTable = document.getElementById('historyInput');
        historyTable.innerHTML = "";


        if(storeUser.length === 0){
            let emptyTr = document.createElement('tr');
            emptyTr.className = 'emptyRow';
            let emptyTd = document.createElement('td');
            emptyTd.colSpan = 5;
            emptyTd.textContent = 'No accounts on file yet. Use Add User to open one.';
            emptyTr.appendChild(emptyTd);
            historyTable.appendChild(emptyTr);
            return;
        }

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
            createTdBalance.textContent = `Php ${FunctionClass.formatAmount(storeUser[i].amount)}`;
            createTr.appendChild(createTdAccount);
            createTr.appendChild(createTdName);
            createTr.appendChild(createTdDate);
            createTr.appendChild(createTdTime);
            createTr.appendChild(createTdBalance);
            historyTable.appendChild(createTr);
        }
    }
    static searchResult(firstNameSearch, lastNameSearch, user){
        const storeUser = FunctionClass.storeInput();
        const account = String(user).trim();
        const first = firstNameSearch.trim();
        const last = lastNameSearch.trim();

        //AN ADMIN CAN LOOK SOMEONE UP BY ACCOUNT NUMBER, FULL NAME, OR EITHER NAME//
        let checkAccountNum = -1;
        if(account !== ""){
            checkAccountNum = storeUser.findIndex((index)=> String(index.accountNumber) === account);
        }
        if(checkAccountNum === -1 && first !== "" && last !== ""){
            checkAccountNum = storeUser.findIndex((index)=> index.firstName === first && index.lastName === last);
        }
        if(checkAccountNum === -1 && first !== ""){
            checkAccountNum = storeUser.findIndex((index)=> index.firstName === first);
        }
        if(checkAccountNum === -1 && last !== ""){
            checkAccountNum = storeUser.findIndex((index)=> index.lastName === last);
        }

        if (checkAccountNum === -1){
            showModal('No matching account found.');
            return false;
        }

        searchResultContainer.innerHTML = "";
        FunctionClass.get_balance(storeUser[checkAccountNum].accountNumber);

        if(storeUser[checkAccountNum].historyDetails.length == 0){
            let createTr = document.createElement('tr');
            let createTdHistory = document.createElement('td');
            createTdHistory.textContent = 'No transactions on this account yet.';
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
        return true;
    }
}


//PICKING A HOLDER (OR AN ACCOUNT NUMBER) FILLS THAT FORM'S THREE FIELDS AS ONE
//SET, SO A NAME CAN NEVER END UP PAIRED WITH SOMEONE ELSE'S ACCOUNT NUMBER.//
function applyAccountToGroup(group, account){
    document.getElementById(group.first).value   = account.firstName;
    document.getElementById(group.last).value    = account.lastName;
    document.getElementById(group.account).value = account.accountNumber;
}

//INLINE FIELD VALIDATION — THE MESSAGE SITS UNDER THE FIELD THAT IS WRONG//
function setFieldError(fieldId, message){
    const field = document.getElementById(fieldId);
    const holder = document.getElementById(fieldId + 'Error');
    if(holder){
        holder.textContent = message || "";
        holder.classList.toggle('isShown', Boolean(message));
    }
    if(field){
        field.classList.toggle('hasError', Boolean(message));
        if(message){ field.setAttribute('aria-invalid', 'true'); }
        else { field.removeAttribute('aria-invalid'); }
    }
}

function clearGroupErrors(group){
    //most keystrokes have no error showing; skip the six DOM writes if so
    if(!document.getElementById(group.first + 'Error').classList.contains('isShown') &&
       !document.getElementById(group.last + 'Error').classList.contains('isShown') &&
       !document.getElementById(group.account + 'Error').classList.contains('isShown')) return;
    setFieldError(group.first, "");
    setFieldError(group.last, "");
    setFieldError(group.account, "");
}

function clearAllGroupErrors(){
    Object.values(accountFieldGroups).forEach(clearGroupErrors);
}

//RETURNS THE ACCOUNT THE THREE FIELDS IDENTIFY, OR null AFTER MARKING WHAT IS WRONG//
function validateAccountGroup(group){
    const storeUser = FunctionClass.storeInput();
    const first = document.getElementById(group.first).value.trim().toUpperCase();
    const last = document.getElementById(group.last).value.trim().toUpperCase();
    const account = document.getElementById(group.account).value.trim();

    clearGroupErrors(group);

    if(first === "" || last === ""){
        if(first === "") setFieldError(group.first, 'Enter the first name.');
        if(last === "") setFieldError(group.last, 'Enter the last name.');
        return null;
    }

    const holder = storeUser.find((user)=> user.firstName === first && user.lastName === last);
    if(!holder){
        //both names are on file but on different records, versus neither being known at all
        const firstOnFile = storeUser.some((user)=> user.firstName === first);
        const lastOnFile = storeUser.some((user)=> user.lastName === last);
        const message = (firstOnFile && lastOnFile)
            ? 'These names belong to different accounts.'
            : 'No account found under this name.';
        setFieldError(group.first, message);
        setFieldError(group.last, message);
        return null;
    }

    if(account === ""){
        setFieldError(group.account, 'Enter the account number.');
        return null;
    }
    if(String(holder.accountNumber) !== account){
        const numberOnFile = storeUser.some((user)=> String(user.accountNumber) === account);
        setFieldError(group.account, numberOnFile
            ? 'This account number belongs to a different customer.'
            : 'No account found with this number.');
        return null;
    }

    return holder;
}

//THE LIST IS MOVED INTO THE ACTIVE FIELD'S WRAPPER, SO IT IS ALWAYS FLUSH
//UNDER THAT FIELD NO MATTER WHICH FORM OR SCREEN SIZE IS IN PLAY.//
let pickState = {field: null, group: null, matches: [], index: -1};

function closePickList(){
    pickList.hidden = true;
    pickList.innerHTML = "";
    if(pickState.field) pickState.field.setAttribute('aria-expanded', 'false');
    pickState = {field: null, group: null, matches: [], index: -1};
}

function highlightPickOption(index){
    const options = [...pickList.children];
    options.forEach((option, i)=> option.classList.toggle('isActive', i === index));
    pickState.index = index;
    if(options[index]) options[index].scrollIntoView({block: 'nearest'});
}

function openPickList(field, group, searchBy, storeUser){
    const matches = FunctionClass.matchingAccounts(field.value, searchBy, storeUser);
    if(matches.length === 0){ closePickList(); return; }

    pickList.innerHTML = "";
    matches.forEach((user, i)=>{
        const option = document.createElement('li');
        option.className = 'pickOption';
        option.setAttribute('role', 'option');
        option.dataset.index = i;

        const primary = document.createElement('span');
        primary.className = 'pickPrimary';
        const meta = document.createElement('span');
        meta.className = 'pickMeta';

        //lead with whatever the admin is typing into, keep the other part as context
        if(searchBy === 'account'){
            primary.textContent = user.accountNumber;
            meta.textContent = FunctionClass.fullName(user);
        } else {
            primary.textContent = FunctionClass.fullName(user);
            meta.textContent = `${user.accountNumber} · Php ${FunctionClass.formatAmount(user.amount)}`;
        }
        option.append(primary, meta);
        pickList.appendChild(option);
    });

    const wrap = field.closest('.fieldWrap');
    if(pickList.parentElement !== wrap) wrap.appendChild(pickList);   //avoid a pointless re-insert
    pickList.hidden = false;
    field.setAttribute('aria-expanded', 'true');
    pickState = {field: field, group: group, matches: matches, index: -1};
}

function choosePickOption(index){
    const user = pickState.matches[index];
    if(!user) return;
    const group = pickState.group;
    applyAccountToGroup(group, user);
    clearGroupErrors(group);
    closePickList();
}

//mousedown would blur the field first, so suppress it and act on the click
pickList.addEventListener('mousedown', (e)=> e.preventDefault());
pickList.addEventListener('click', (e)=>{
    const option = e.target.closest('.pickOption');
    if(option) choosePickOption(Number(option.dataset.index));
});
document.addEventListener('mousedown', (e)=>{
    if(pickList.hidden) return;
    if(e.target !== pickState.field && !pickList.contains(e.target)) closePickList();
});

Object.values(accountFieldGroups).forEach((group)=>{
    const firstField = document.getElementById(group.first);
    const lastField = document.getElementById(group.last);
    const accountField = document.getElementById(group.account);
    const typedName = ()=> `${firstField.value.trim()} ${lastField.value.trim()}`.trim();

    //One input handler per field: it reads the account list once and hands that
    //same array to every lookup below, rather than each of them re-parsing it.
    const onNameInput = (field, storeUser)=>{
        //1. a full name was picked from the list: split it across the fields
        const picked = FunctionClass.findByFullName(field.value, storeUser);
        if(picked){ applyAccountToGroup(group, picked); return; }

        //2. first and last were typed by hand and name a real holder: supply the number
        const matched = FunctionClass.findByFullName(typedName(), storeUser);
        if(matched){ accountField.value = matched.accountNumber; return; }

        //3. the name no longer belongs to the number on screen, so drop the
        //   stale number rather than leave a mismatched pair sitting there
        const held = FunctionClass.findByAccountNumber(accountField.value, storeUser);
        if(held && FunctionClass.fullName(held) !== typedName().toUpperCase()){
            accountField.value = "";
        }
    };

    //any of the three doubles as the account picker
    [[firstField, 'name'], [lastField, 'name'], [accountField, 'account']].forEach(([field, searchBy])=>{
        field.addEventListener('focus', ()=> openPickList(field, group, searchBy));
        field.addEventListener('input', ()=>{
            const storeUser = FunctionClass.storeInput();
            clearGroupErrors(group);   //editing is an attempt to fix it, so drop the message
            if(searchBy === 'account'){
                //the number fills the holder's name back in
                const picked = FunctionClass.findByAccountNumber(accountField.value, storeUser);
                if(picked) applyAccountToGroup(group, picked);
            } else {
                onNameInput(field, storeUser);
            }
            openPickList(field, group, searchBy, storeUser);
        });
        field.addEventListener('blur', ()=>{ if(pickState.field === field) closePickList(); });
        field.addEventListener('keydown', (e)=>{
            if(e.key === 'Escape'){ closePickList(); return; }
            if(pickList.hidden || pickState.field !== field) return;

            if(e.key === 'ArrowDown'){
                e.preventDefault();
                highlightPickOption((pickState.index + 1) % pickState.matches.length);
            } else if(e.key === 'ArrowUp'){
                e.preventDefault();
                highlightPickOption((pickState.index - 1 + pickState.matches.length) % pickState.matches.length);
            } else if(e.key === 'Enter' && pickState.index > -1){
                e.preventDefault();          //choose the highlighted account, do not submit yet
                choosePickOption(pickState.index);
            }
        });
    });
});

function create_user(firstName, lastName, date, time, amount, dateOfBirth){
    const storeUser = FunctionClass.storeInput();

    //A BLANK NAME WOULD CREATE AN ACCOUNT NOBODY CAN LOOK UP OR TRANSACT ON//
    if(firstName === "" || lastName === ""){
        showModal('Enter both a first and last name.');
        return false;
    }
    if(FunctionClass.toAmount(amount) < 0){
        showModal('Enter an initial deposit of zero or more.');
        return false;
    }

    //THE SAME PERSON = SAME FIRST AND LAST NAME ON ONE RECORD//
    const alreadyExists = storeUser.some((user)=> user.firstName === firstName && user.lastName === lastName);
    if(alreadyExists){
        showModal('An account already exists for this name.');
        return false;
    }

    //only now that the add is going through is a number worth reserving
    const accountNumber = FunctionClass.newAccountNumber();
    const newUser = new NewUserRef(accountNumber, firstName, lastName, date, time, amount, dateOfBirth);
    FunctionClass.usertoAdd(newUser);
    return `Account opened for ${firstName} ${lastName}. Account number: ${accountNumber}.`;
}

//THE LOGO IS A HOME BUTTON: RELOAD THE DASHBOARD, KEEPING THE SIGNED IN NAME//
document.getElementById('toLoad').addEventListener('click', ()=>{
    location.reload();
})

//AFTER A POSTED TRANSACTION, CONFIRM IT AND ASK WHETHER TO STAY ON THE FORM.
//Yes leaves the (already cleared) form open for the next one, No closes it.//
function askAnother(receipt, question){
    showModal(receipt, {
        question: question,
        onYes: ()=>{},          //form is open and reset, ready for the next one
        onNo: ()=> hide_all()
    });
}

//A FAILED OPERATION KEEPS WHAT WAS TYPED, SO IT CAN BE CORRECTED AND RESUBMITTED//

addUser.addEventListener('submit', (e)=>{
    e.preventDefault();
    const added = create_user(
        addUserfirstName.value.trim().toUpperCase(),
        addUserlastName.value.trim().toUpperCase(),
        FunctionClass.getDateUser(),
        FunctionClass.getTimeUser(),
        addUserDeposit.value,
        addUserDob.value);
    if(added){ addUser.reset(); askAnother(added, 'Add another user?'); }
});



withdrawFormOnly.addEventListener('submit', (e)=>{
        e.preventDefault();
        //who the account belongs to is reported inline; only the amount uses the modal
        if(!validateAccountGroup(accountFieldGroups.withdraw)) return;
        const receipt = FunctionClass.withdraw(withDrawFirstName.value.trim().toUpperCase(), withDrawLastName.value.trim().toUpperCase(), withdrawAccountNum.value,  withDrawAmount.value);
        if(receipt){ withdrawFormOnly.reset(); clearGroupErrors(accountFieldGroups.withdraw); askAnother(receipt, 'Make another transaction?'); }
    });

depositContainer.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(!validateAccountGroup(accountFieldGroups.deposit)) return;
        const receipt = FunctionClass.deposit(depoFirstName.value.trim().toUpperCase(), depoLastName.value.trim().toUpperCase(), depoAccountNum.value, depositAmount.value );
        if(receipt){ depositContainer.reset(); clearGroupErrors(accountFieldGroups.deposit); askAnother(receipt, 'Make another transaction?'); }
    });


transfer.addEventListener('submit', (e)=>{
    e.preventDefault();
    //check both sides before bailing out, so every problem is flagged at once
    const senderOk = validateAccountGroup(accountFieldGroups.sender);
    const receiverOk = validateAccountGroup(accountFieldGroups.receiver);
    if(!senderOk || !receiverOk) return;

    const receipt = FunctionClass.send(sendFirstName.value.trim().toUpperCase(), sendLastName.value.trim().toUpperCase(), receiverFirstName.value.trim().toUpperCase(), receiverLastName.value.trim().toUpperCase(), senderAccountNum.value, receiverAccountNum.value, senderAmount.value);
    if(receipt){
        document.getElementById("userTransferForm").reset();
        document.getElementById("receiverTransferForm").reset();
        clearGroupErrors(accountFieldGroups.sender);
        clearGroupErrors(accountFieldGroups.receiver);
        askAnother(receipt, 'Make another transaction?');
    }
});

search.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(searcFName.value.trim() === "" && searcLName.value.trim() === "" && searchAccountNum.value.trim() === ""){
        showModal('Enter a name or account number to search.');
        return;
    }
    const found = FunctionClass.searchResult(searcFName.value.toUpperCase(), searcLName.value.toUpperCase(), searchAccountNum.value);
    if(!found) return;
    searchResultContainer.style.visibility = 'visible'
    getBalanceContainer.style.visibility = 'visible'
    search.style.visibility = 'hidden';
    hideSearch.style.visibility = 'visible'   //keep a way to dismiss the results
    search.reset()
});
