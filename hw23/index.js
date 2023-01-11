let questionAge = prompt('ваш рік народження')

switch (questionAge) {
    case null: {
        questionAge = 'Шкода що ви не захотіли ввести свій рік народження '
        alert(questionAge)
        break
    }
    default: {
        alert(questionAge)
        break
    }
}
let questionCity = prompt('ваше місто?')

switch (questionCity) {
    case null: {
        alert(questionCity = 'Шкода що ви не захотіли ввести свій рік народження ')
        break
    }
    case 'Київ': {
        alert(questionCity = `Ти живеш у столиці ${questionCity}`)
        break
    }
    case 'Вашингтон': {
        alert(questionCity = `Ти живеш у столиці ${questionCity}`)
        break
    }
    case 'Лондон': {
        alert(questionCity = `Ти живеш у столиці ${questionCity}`)
        break
    }
    default: {
        alert(questionCity = `ти живеш у місті ${questionCity}`)
        break
    }
}

let questionSport = prompt('ваш улюблений спорт')

switch (questionSport) {
    case null: {
        alert(questionSport = 'Шкода що ви не захотіли ввести свой улюблений спорт')
        break
    }
    case 'футбол': {
        alert(questionSport = 'Круто!Хочеш стати як Ліонель Мессі?')
        break
    }
    case 'бокс': {
        alert(questionSport = 'Круто!Хочеш стати як Віталій Клічко?')
        break
    }
    case 'баскетбол': {
        alert(questionSport = 'Круто!Хочеш стати як Леброн Джеймс?')
        break
    }
    default: {
        alert(questionSport = `твій улюблений спорт ${questionSport}`)
        break
    }
}