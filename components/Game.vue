<template>
    <div class="row g-0">
        <div class="col p-3">
            <div>
                <canvas class="position-absolute"
                    style="height: calc(100vh - 2rem); width: calc(100vh - 2rem); transition-property: transform; transition-duration: 200ms; transition-timing-function: linear;" :style="{transform: boardRotation}"></canvas>
                <img src="/images/monopoly.svg" style="height: calc(100vh - 2rem); width: calc(100vh - 2rem); transition-property: transform; transition-duration: 200ms; transition-timing-function: linear;" :style="{transform: boardRotation}"/>
            </div>
        </div>
        <div class="col p-3" style="min-width: 250px;">
            <div class="d-flex flex-column justify-content-between align-items-center"
                style="min-height: calc(100vh - 2rem); gap: 1rem 0;">
                <div class="p-3 border w-100 d-flex flex-column justify-content-between align-items-centers"
                    style="flex-grow: 3; gap: 1rem 0;">
                    <div class="p-3 border w-100 card-name" style="/* flex-grow: 1; */">Card Name & Price</div>
                    <div class="border w-50 mx-auto" style="flex-grow: 1;">Card View</div>
                </div>

                <div class="p-3 border w-100" style="flex-grow: 1;">Buy Menu</div>

                <div class="p-3 border w-100 d-flex flex-column justify-content-start align-items-centers overflow-auto"
                    style="flex-grow: 2; gap: 0.75rem 0;">
                    <div class="p-1 border w-100 text-center">Bank History</div>
                    <div class="p-1 border w-100">&#8203;</div>
                    <div class="p-1 border w-100">&#8203;</div>
                </div>
                <button v-on:click="diceRoll()">Roll Dice. Board position is {{ boardPosition }} (actual: {{ position }})</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const boardRotation = useBoardRotation();
const diceRoll = useRollDice;
const position = usePosition();
const boardPosition = useBoardPosition();
</script>