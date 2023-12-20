<template>
    <Toast show>
        <ToastHeader>
            <b-img src="https://dummyimage.com/20x20/ff0015/ff0015" rounded margin="e-2" alt="Card image cap" />
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <CloseButton dismiss="toast" />
        </ToastHeader>
        <ToastBody>データの数は10個までです</ToastBody>
    </Toast>
</template>

<script setup lang="ts">

interface Props {
    alertMessage: string;
}

withDefaults(defineProps<Props>(), {
    alertMessage: '',
})
</script>