<template>
    <div class="row">
        <div class="col p-3">
            <h2>가계부 수정</h2>
        </div>
    </div>
    <!-- 수정 대상 거래 -->
    <div class="Info">
        <p>수정대상 리스트 정보</p>
    </div>

    <!-- 수정 상세 -->
    <div class="row">
        <div class="col">
            <div class="form-group">
                <label
                    :class="{ required: !transaction.type }"
                    for="inNout"
                    >입출금 구분</label
                >
                <select
                    class="form-control"
                    id="inNout"
                    v-model="transaction.type"
                >
                    <option value="" disabled selected>
                        카테고리
                    </option>
                    <option value="o">지출</option>
                    <option value="i">수입</option>
                </select>
            </div>
            <div class="form-group">
                <label
                    :class="{
                        required: !transaction.category,
                    }"
                    for="cate"
                    >카테고리</label
                >
                <select
                    class="form-control"
                    id="cate"
                    v-model="transaction.category"
                >
                    <option value="" disabled selected>
                        카테고리
                    </option>
                    <option
                        v-for="cat in categories"
                        :key="cat.code"
                        :value="cat.code"
                    >
                        {{ cat.name }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="memo">메모</label>
                <input
                    type="text"
                    class="form-control"
                    id="memo"
                    v-model="transaction.memo"
                    placeholder="메모 내용을 입력해주세요"
                />
            </div>
            <div class="form-group">
                <label
                    :class="{
                        required: !transaction.amount,
                    }"
                    for="cash"
                    >금액</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="cash"
                    v-model="transaction.amount"
                    placeholder="금액을 입력해주세요"
                    pattern="\d*"
                />
            </div>
            <div class="form-group">
                <label
                    :class="{ required: !transaction.date }"
                    for="date"
                    >거래 날짜</label
                >
                <input
                    type="date"
                    class="form-control"
                    id="date"
                    v-model="transaction.date"
                />
                <i class="fa-regular fa-calendar-days"></i>

                <input
                    type="time"
                    class="form-control"
                    id="time"
                    v-model="transaction.time"
                />
                <i class="fa-regular fa-clock"></i>
            </div>
            <div class="form-group">
                <button
                    type="button"
                    class="btn btn-primary m-1"
                    @click="cancleTransaction"
                >
                    취소
                </button>
                <button
                    type="button"
                    class="btn btn-primary m-1"
                    @click="saveTransaction"
                >
                    저장
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const initialData = {
    account: [
        {
            id: 'user1',
            name: '임종민',
            img: '',
            money: '10000',
            category1: 'i',
            category2: 'a',
            memo: '',
            date: '2024-05-21',
            time: '15:25',
        },
    ],
    category2: [
        { code: 'a', name: '의' },
        { code: 'b', name: '식' },
        { code: 'c', name: '주' },
        { code: 'd', name: '취미' },
        { code: 'e', name: '기타' },
    ],
};

const router = useRouter();

const transaction = reactive({
    type: '',
    category: '',
    memo: '',
    amount: '',
    date: '',
});

const categories = initialData.category2;

const saveTransaction = () => {
    if (
        !transaction.type ||
        !transaction.category ||
        !transaction.amount ||
        !transaction.date
    ) {
        alert('모든 필수 항목을 입력해주세요.');
        return;
    }
    router.push('/Home');
};
const cancleTransaction = () => {
    const userConfirmed =
        confirm('수정을 취소하시겠습니까?');
    if (userConfirmed) {
        router.push('/Home');
    }
};
</script>

<style scoped>
.row {
    margin: 20px 0;
}

.required::after {
    content: ' *';
    color: red;
    font-size: 20px;
}
</style>
