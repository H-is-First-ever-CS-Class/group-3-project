<template>
    <div v-if="showSelf()">
        <div style="width: 100vw; height: 100vh; opacity: 0.5;" class="bg-dark position-absolute top-0 start-0">
        </div>
        <div class="position-absolute top-50 start-50 translate-middle bg-light p-4 rounded-pill">
            <h1>Sign-up & Login</h1>
            <input id="alias" v-model="alias" placeholder="Alias">
            <input id="pass" v-model="passphrase" type="password" placeholder="Passphrase">
            <button type="submit" @click="signIn(alias, passphrase, $forceUpdate)">Sign In</button>
            <button type="button" @click="signUp(alias, passphrase, $forceUpdate)">Sign Up</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
const alias = ref("");
const passphrase = ref("");

const signIn = useUserAuth;
const signUp = useUserCreate;
const showSelf = useShowLoginPrompt;
this
</script>

<style lang="scss"></style>