<template>
    <section>
        <h2>{{ title }}</h2>
        <slot />
    </section>
</template>

<script>
export default {
    name: "BaseContainer",
    props: ["title"],
};
</script>

<style lang=""></style>
