<template>
    <HeaderComponent/>
    <router-view/>
</template>
<script>
import HeaderComponent from "@/components/Header";
export default {
    components: {
        HeaderComponent,
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    font-family: Helvetica, sans-serif;
}
</style>