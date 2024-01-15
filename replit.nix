{ pkgs }: {
        deps = [
                pkgs.nodejs-16_x

        pkgs.nodePackages.typescript-language-server
        pkgs.yarnpkgs.arcan.ffmpeg
        pkgs.replitPackages.jest
        pkgs.libwebp
        pkgs.imagemagick
        pkgs.git
        ];
}