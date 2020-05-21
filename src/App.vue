<template>
    <div id="app">
        <div class="container">
            <div class="terminal-nav">
                <header class="terminal-logo">
                    <div class="logo terminal-prompt">
                        <router-link to="/">Wen-Yuh Su</router-link>
                    </div>
                </header>
                <nav class="terminal-menu">
                    <ul vocab="https://schema.org/" typeof="BreadcrumbList">
                        <li>
                            <router-link to="/edu"><span>Education</span></router-link>
                            <meta property="position">
                        </li>
                        <li property="itemListElement" typeof="ListItem">
                            <router-link to="/exp"><span property="name">Experience</span></router-link>
                            <meta property="position" content="1">
                        </li>
                        <li property="itemListElement" typeof="ListItem">
                            <router-link to="/proj"><span property="name">Project</span>
                            </router-link>
                            <meta property="position" content="2">
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <router-view></router-view>




    </div>

</template>


<script>
export default {
    name: 'app',
}
</script>
<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
}
</style>