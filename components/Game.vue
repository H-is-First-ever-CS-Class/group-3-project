<template>
    <div class="grid gap-0 grid-rows-1 grid-cols-2">
        <div class="p-3">
            <div>

                <img src="/images/monopoly.svg" style="height: calc(100vh - 2rem); width: calc(100vh - 2rem); transition-property: transform; transition-duration: 200ms; transition-timing-function: linear;" :style="{transform: boardRotation}"/>
            </div>
        </div>
        <div class="p-3" style="min-width: 250px;">
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

                <button v-on:click="diceRoll()">Roll Dice. Board position is {{ boardPosition }} (actual: {{ position }})</button>
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