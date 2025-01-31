
export default function Schedule() {
    const date = new Date();
    const monthName: string[] = ["Janeiro","Fervereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    // const weekName: string[] = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"];

    function getDaysMonth(){
        const year = date.getFullYear(), month = date.getMonth()+1, days = new Date(year, month, 0).getDate()
        const monthDays: number[] = [];
        for(let i = days;i > 0; i--){
            monthDays.unshift(i)
        }
        return monthDays;
    };
    getDaysMonth();
    return(
        <div className="w-full flex justify-center">
            <p className="text-2xl font-bold">{monthName[date.getMonth()]} - {date.getFullYear()}</p>
        </div>
    )
}