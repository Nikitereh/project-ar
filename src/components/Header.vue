<template>
    <div class="header">
        <router-link to="/" class="header__link">Домашняя страница</router-link>
        <router-link to="/about" class="header__link">О тебе</router-link>
        <router-link to="/five" class="header__link">Пятерка</router-link>
        <router-link to="/plans" class="header__link">Планы</router-link>
        <video class="header__video" autoplay loop src="../audio/fredAgain.mp4"></video>
    </div>
</template>

<script>


export default {
    name: 'HeaderComponent',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
.header {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    background: #2e2e2e;

    @media (max-width: 769px) {
        flex-direction: column;
        padding: 1rem;
    }
}

.header__link {
    text-decoration: none;
    color: #FFFFFF  ;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 5px 10px;

    &:hover {
        color: #85bde5;
        outline: 1px solid;
        border-radius: 5px;
    }
}

.header__video {
    display: none;
}
</style>