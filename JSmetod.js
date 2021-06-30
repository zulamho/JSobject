//​​ Создать объект  phone​ с информацией о телефоне. Он должен содержать свойства: название бренда, модель телефона, память телефона,
// цвет а также свойство power​ - которое означает выключен телефон или нет (true​ / false​). 

let phone = {
    nameBrend: 'Samsung',
    modelPhone: 'Galaxy S20',
    memoryPhone: '128gb/8gb',
    colorPhone: 'white',
    powerPhone : false,
    batteryPower : '77%',
    
    loginfo: function (name){
      return (`Я звоню ${name}` )
    },

    getBatteryPower: function(){
      return `Ваша зарядка ${this.batteryPower}`
    },
    
    isOn : function(){
       if(this.powerPhone == true){
         return 'телефон включен'
       }if (this.powerPhone == false){
         return 'телефон выключен'
       }
    },

       switch: function(){
         if(this.powerPhone == false){
           return this.powerPhone = true
         } if(this.powerPhone == true){
           return this.powerPhone == false
         }
       },
         
      sent: [
               {to: "+7919 555 23 11", time: "03:12", message: "Сплю!"},
               {to: "+7377 656 21 21", time: "23:25", message: "Д1авала?"},
               ], 

      inbox: [
               {from: "+7999 213 12 12", time: "20:12", message: "Спишь?"},
               {from: "+2124 312 48 24", time: "11:25", message: "Все еще спишь?"},
             ],
    sentMessage: function(to,time,message){
         return this.sent.push({to,time,message})
       },

    clearInbox: function(){
         for (let i = 0 ; i < inbox.length ; i++){
           delete this.inbox[i]
       }
    },
     clearSent: function(){
         for (let i = 0 ; i < sent.length ; i++){
           delete this.inbox[i]
        }
     }
     }

      
console.log(phone.loginfo('Адаму'));
console.log(phone.getBatteryPower());
console.log(phone.isOn());
console.log(phone.switch());
console.log(phone.sentMessage('89286968169', '12:00','хьаж хьай г1улкхаг'))
console.log(phone.sent)


