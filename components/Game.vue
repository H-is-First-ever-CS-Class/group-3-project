<template>
    <div class="grid gap-0 grid-rows-1 grid-cols-2">
        <div class="p-4 relative">
            <img src="/images/monopoly.svg" class="absolute w-[calc(100%-2rem)] transition-transform duration-200 ease-linear" :style="{transform: boardRotation}"/>
            <InteractiveBoardView></InteractiveBoardView>
        </div>
        <div class="p-4" style="min-width: 250px;">
            <div class="grid gap-4 grid-rows-4 grid-cols-1 h-full">
                <div class="p-3 border row-span-2">
                    <div class="p-3 border w-1/2 mx-auto">Card Name & Price</div>
                    <div class="border w-1/2 mx-auto">Card View</div>
                </div>

                <div class="p-3 border">Buy Menu</div>

                <div class="p-3 border max-h-40 overflow-auto">
                    <div class="p-1 border text-center">Bank History</div>
                    <div class="grid gap-3 grid-cols-1 auto-rows-auto pt-2">
                        <div class="p-1 border">Bank statement 1</div>
                        <div class="p-1 border">Bank statement 2</div>
                        <div class="p-1 border">Bank statement 3</div>
                        <div class="p-1 border">Bank statement 4</div>
                    </div>
                </div>

                <button v-on:click="diceRoll()" class="bg-cyan-300 rounded-lg">Roll Dice. Board position is {{ boardPosition }} (actual: {{ position }})</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { CanvasHTMLAttributes, Ref } from 'vue';

const boardRotation = useBoardRotation();
const diceRoll = useRollDice;
const position = usePosition();
const boardPosition = useBoardPosition();

// const canvas: Ref<HTMLCanvasElement | null> = ref(null);

// onMounted(() => {
//     if (canvas.value === null) throw new Error("Cavas ref in Game.vue hasn't been initialized");

//     useTargetCanvas(canvas.value)
//     useDrawPlayer("#F00");
// });

// onUpdated(() => useDrawPlayer("#F00"));
</script>