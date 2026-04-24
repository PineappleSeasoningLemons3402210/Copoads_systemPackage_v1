// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "Copoads",
    platforms: [
        .macOS(.v13)
    ],
    products: [
        .executable(
            name: "copoads",
            targets: ["Copoads"]
        )
    ],
    dependencies: [
        // You can add dependencies here later
        // Example:
        // .package(url: "https://github.com/apple/swift-argument-parser", from: "1.3.0")
    ],
    targets: [
        .executableTarget(
            name: "Copoads",
            dependencies: [
                // "ArgumentParser" (if added)
            ],
            path: "Sources"
        ),
        .testTarget(
            name: "CopoadsTests",
            dependencies: ["Copoads"],
            path: "Tests"
        )
    ]
)
