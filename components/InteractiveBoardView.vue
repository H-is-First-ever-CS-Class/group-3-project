<template>
    <!-- See https://stackoverflow.com/questions/5445491/height-equal-to-dynamic-width-css-fluid-layout -->
    <!-- Absolute so you can stack this shit on top of the image -->
    <div class="absolute w-[calc(100%-2rem)]">
        <!-- Vertical padding percentages is based off of width -->
        <div class="h-0 overflow-hidden pt-[100%] relative w-full">
            <!-- Then use a absolute div for the internal -->
            <div class="absolute top-0 left-0 w-full h-full">
                <div class="grid gap-0 grid-cols-11 grid-rows-6">
                    <div v-for="n in 66" style="font-size: 1.3vw;" :style="{height: n < 11 ? '6.5vw' : '3vw', width: (n === 1 || n === 11) ? '6.5vw' : '3.25vw'}">
                        {{n}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>