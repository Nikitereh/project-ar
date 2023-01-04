<template>
    <div class="home container">
        <div class="home__bg container__bg">
            <img class="bg-image" src="../images/bg.jpg" alt="">
            <div class="container__desc">
                <span>Наська, это небольшой презент от меня, просто потому,
                    что ты сделала меня счастливее за несколько дней.
                    Ты подарила мне чувства, о которых я давно забыл, и которые давно не испытывал.
                    Я уже было привык жить один и справлятся со всем один, стал безомоциональным и казалось, что все в порядке,
                    но тут появилась ты и будто вдохнула в меня жизнь и я вспомнил каково чувствовать такое...
                    Я провел с тобой всего лишь пару дней, а кажется, что знаю тебя очень давно!
                    Я провел это время в умиротворении и спокойствии, за что безмерно благодарен тебе.
                    Надеюсь это только начало длинной истории...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>

<style lang="scss">
.container__bg {
    position: relative;
}

.bg-image {
    filter: grayscale(1);
    width: 100%;
    max-height: 1800px;
    object-fit: cover;

    @media (max-width: 899px) {
        max-height: 400px;

    }
}

.container__desc {
    background: #2e2e2e;
    position: absolute;
    color: #FFFFFF;
    padding: 1rem;
    top: 20%;
    left: 3%;
    opacity: .7;
    border-radius: 3px;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2rem;

    @media (min-width: 900px) {
        width: 34%;
    }

    @media (max-width: 899px) {
        font-size: 1.2rem;
        line-height: 1.4rem;
        position: static;
        transform: translateY(-4px);
        border-radius: 0;

    }
}
</style>
