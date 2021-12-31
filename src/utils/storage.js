import { ref,watchEffect } from "vue";

export default function useStorage(name, value=[]){
    //let data = ref(JSON.parse(localStorage.getItem(name)|| value))
    //localStorage.clear();
    let data=  ref(JSON.parse(localStorage.getItem(name)) || value);
    watchEffect(()=>{
        localStorage.setItem(name,JSON.stringify(data.value))
    })
    // let data=ref(value);
     //console.log(localStorage.getItem(name));
    return data
}