<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm sticky-top">
            <div class="container">
                <router-link  class="navbar-brand" :to="{ name: 'home' }">Portfolio</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#spaNavbarSupportedContent" aria-controls="spaNavbarSupportedContent" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="spaNavbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        <li class="nav-item">
                            <router-link  exact-active-class="active" class="nav-link" :to="{ name: 'projects' }">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  exact-active-class="active" class="nav-link" :to="{ name: 'knowledge' }">Knowledge</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  exact-active-class="active" class="nav-link" :to="{ name: 'pricing' }">Pricing</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  exact-active-class="active" class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="mt-3">
            <router-view></router-view>
        </div>
    </div>
</template>