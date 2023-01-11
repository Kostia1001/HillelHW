let questionAge = prompt('ваш рік народження')
if (questionAge == null) {
    questionAge = 'Шкода що ви не захотіли ввести свій рік народження '
    alert(questionAge)
}else {
    alert(questionAge)
}

let questionCity = prompt('ваше місто?')
if (questionCity == null) {
    questionCity = 'Шкода що ви не захотіли ввести своє місто'
    alert(questionCity)

} else if (questionCity == 'Київ' || questionCity == 'Вашингтон' || questionCity == 'Лондон') {
    questionCity = `Ти живеш у столиці ${questionCity}`
    alert(questionCity)
} else {
    questionCity = `ти живеш у місті ${questionCity}`
    alert(questionCity)
}

let questionSport = prompt('ваш улюблений спорт')
if (questionSport == null) {
    questionSport = 'Шкода що ви не захотіли ввести свой улюблений спорт'
    alert(questionSport)

} else if (questionSport == 'футбол') {
    questionSport = 'Круто!Хочеш стати як Ліонель Мессі?'
    alert(questionSport)

} else if (questionSport == 'бокс') {
    questionSport = 'Круто!Хочеш стати як Віталій Клічко?'
    alert(questionSport)

} else if (questionSport == 'баскетбол') {
    questionSport = 'Круто!Хочеш стати як Леброн Джеймс?'
    alert(questionSport)
} else {
    alert(questionSport)
}






