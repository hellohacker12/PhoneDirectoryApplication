const tablekey = 'pda-table';

let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click',() => {
localStorage.removeItem(tablekey);
});


let pdaTable;
let pdaTableDemo = {
    'Bobby Jones':{
          'phone':'9600195759',
          'address':'1234 Bobby Avenue'
   },
    'George Romero':{
           'phone':'7022174467',
           'address':'1234 Romero Avenue'
   }
};

let refreshDOMTable = () => {

    pdaTable=pdaTableDemo;
    let pdaTableKeys = Object.keys(pdaTable);
    let tableContainer = document.getElementById('pdaTableContainer');
    let oldTableBody= document.getElementById('tableBody');
   tableContainer.removeChild(oldTableBody);
    let newTableBody= document.createElement('span');
    newTableBody.id='tableBody';
   tableContainer.appendChild(newTableBody);

    for(let i=0;i<pdaTableKeys.length;i++){
        letCurrentRow=document.createElement('div');
        letCurrentNameCol=document.createElement('div');
        letCurrentPhoneCol=document.createElement('div');
        letCurrentAddressCol=document.createElement('div');
        letCurrentEditBtn=document.createElement('div');
        letCurrentDeleteBtn=document.createElement('div');

        CurrentRow.className='pda-table-row';
        CurrentNameCol.className='pda-table-column pda-name ';
        CurrentPhoneCol.className='pda-table-column pda-phone';
        CurrentAddressCol.className='pda-table-column pda-address';
        CurrentEditBtn.className='pda-table-column  pda-edit';
        CurrentDeleteBtn.className='pda-table-column pda-delete';

        CurrentNameCol.innerHTML= pdaTableKeys[i];
        CurrentPhoneCol.innerHTML=pdaTable[pdaTableKeys[i]].phone;
        CurrentAddressCol.innerHTML=pdaTable[pdaTableKeys[i]].address;

        CurrentEditBtn.innerHTML='<i class="fas fa-user-edit"></i>';
        CurrentDeleteBtn.innerHTML='<i class="fas fa-user-minus"></i>';
    

        CurrentRow.appendChild(CurrentNameCol);
        CurrentRow.appendChild(CurrentPhoneCol);
        CurrentRow.appendChild(CurrentAddressCol);
        CurrentRow.appendChild(CurrentEditBtn);
        CurrentRow.appendChild(CurrentDeleteBtn);
        newTableBody.appendChild(CurrentRow);
    }

        let enableDisableNewUserModal = (option) => {
            let newPersonName=document.getElementById('newPersonName');
            let newPersonPhone=document.getElementById('newPersonPhone');
            let newPersonAddress=document.getElementById('newPersonAddress');
            newPersonName.value='';
            newPersonPhone.value='';
            newPersonAddress.value='';

            let newPersonModal= document.getElementById('pdaPersonModal');
            let backdrop=document.getElementById('backdrop');

             newPersonModal.className='${option}-modal';
             backdrop.className='${option}-modal';
        }

        let addNewEntryBtn = document.getElementById('pdaAddNewEntry');
        let editBtns= document.getElementsByClassName('pda-edit');
        let deleteBtns=document.getElementsByClassName('pda-delete');

        let newPersonSubmitBtn=document.getElementById('newPersonSubmitBtn');
        let newPersonCancelBtn=document.getElementById('newPersonCancelBtn');

        newPersonSubmitBtn.addEventListener('click', () => {

            let NewPersonName=document.getElementById('NewPersonName').value.trim();
            let NewPersonPhone=document.getElementById('NewPersonPhone').value.trim();
            let NewPersonAddress=document.getElementById('NewPersonAddress').value.trim();

            if(newPersonName === '')
                newPersonName.className='input-err';
            else
            newPersonName.className = '';

            if(newPersonPhone === '')
                newPersonPhone.className='input-err';
            else
             newPersonPhone.className='';
             
            if(newPersonAddress === '')
               newPersonAddress.className='input-err';
            else
             newPersonAddress.className='';

            if(newPersonName !=='' && newPersonPhone !== '' &&  newPersonAddress !== ''){
                let newPerson = {};
                pdaTable[newPersonName]= {
                    'phone':newPersonPhone,
                    'address':NewPersonAddress

                }
                localStorage.setItem(tablekey,JSON.stringify(pdaTable));
                enableDisableNewUserModal('disable');
                refreshDOMTable();
            }

        });

        addNewEntryBtn.addEventListener('click', () => {
         enableDisableNewUserModal('enable');
        });        
    }

    refreshDOMTable();



