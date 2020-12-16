import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="wacc",
    version="0.0.1",
    author="pax1a",
    author_email="author@example.com",
    description="The Python micro framework for deriving cost of capital",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/pax1a/wacc",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: BSD License",
        "Operating System :: OS Independent",
        "Topic :: Office/Business :: Financial",
    ],
    python_requires='>=3.6',
)
