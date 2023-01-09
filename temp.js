tutti = function(){
    document.getElementsByTagName('form')[0].target = '_blank';
    let list = ["automation",
    "account",
    "driver.activation.vehicle",
    "document.validation.partner",
    "driver.deactivation.vehicle.expiring",
    "driver.deactivation.vehicle.retrograding",
    "driver.deactivation.vehicle.retrograded",
    "rider.new.account.rider.pro",
    "automation",
    "document.validation.driver",
    "account",
    "signin",
    "document.validation.vehicle",
    "automation",
    "signup",
    "driver.activation.account",
    "driver.deactivation.vehicle.expired",
    "rider.new.account.member",
    "processing.airfrance.reporting",
    "rider.new.account.rider"]
    for(i=0;i<list.length;i++){
        let element = list[i];
        setTimeout(()=>{
            document.getElementsByName('q')[0].value = 'org:snapcar '+ element; 
            document.getElementsByTagName('form')[0].submit()
        },(i+1)*500)
    }
}