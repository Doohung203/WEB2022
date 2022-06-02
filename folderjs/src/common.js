// hiển thị ra ngoài màn hình
export function render(element , content){
    if(element){
        document.getElementById(element).innerHTML = content;
    }
}