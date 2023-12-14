<template>
	<Navbar expand="lg" class="bgColor neonShadow">
		<Container type="fluid">
			<NavbarBrand class="wText">SampleText</NavbarBrand>
			<NavbarNavList margin="e-auto">
				<NavItem>
					<NavLink to="/">
						Home
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/">
						Link
					</NavLink>
				</NavItem>
			</NavbarNavList>
			<b-button button="light"><b-p margin="1">Stay With Me<BIcon margin="s-1" icon="bi:cloud-sun">
					</BIcon>
				</b-p></b-button> <!-- ダークモードの実装は今度どす -->
		</Container>
	</Navbar>
</template>

<style>
.bgColor {
	background-color: #25d58f;
}

.wText {
	color: aliceblue;
	text-shadow: 1px 1px 2px black;
	font-size: 30px
}

.wtext:hover {
	color: aliceblue;
}

.neonShadow {
  box-shadow: 0 0 30px #25d58f;
}
</style>