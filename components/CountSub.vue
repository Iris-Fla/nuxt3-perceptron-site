<template>
    <Alert theme="primary">
        <Row align-items="center">
            <Col col="10">
            <BInputGroup>
                <BInputGroupText id="BInputGroup-sizing-lg">
                    タイトル
                </BInputGroupText>
                <BFormInput type="text" placeholder="タイトルを入力" aria-label="Title" />
                <BInputGroupText>重み</BInputGroupText>
                <BFormInput type="text" placeholder="重みを入力" aria-label="Weight" />
            </BInputGroup>
            </Col>
            <Col col="2">
            <b-button button="primary">
                Primary
            </b-button>
            </Col>
        </Row>
    </Alert>
</template>