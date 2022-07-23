{ pkgs }: {
	deps = [
    pkgs.nodejs-16_x
    pkgs.rustc
		pkgs.rustfmt
		pkgs.cargo
		pkgs.cargo-edit
    pkgs.rust-analyzer
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}