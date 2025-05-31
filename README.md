# Resona Model Application - User Guide

## Overview

The Resona Model Application is a Python-based tool that implements the advanced voice analysis, reproduction, and incubation methodologies developed in the Resona Model research. This application provides a modern, responsive UI with ShadCN-inspired design principles and guides users through complex workflows while maintaining usability.

## Features

- **Master Analysis Mode**: Perform deep psychological, developmental, and linguistic analysis of voice patterns from text or audio
- **Voice Reproduction Mode**: Faithfully reproduce analyzed voice patterns across different content formats
- **Voice Incubation Mode**: Create new entity/brand voices by synthesizing multiple stakeholder inputs
- **AI Integration**: Connect to various AI providers (OpenAI, Anthropic, Cohere) for advanced processing
- **Export Options**: Export results in PDF, Markdown, or JSON formats

## Installation

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- Virtual environment (recommended)

### Setup Instructions

1. Clone or download the application files to your local machine
2. Navigate to the application directory
3. Run the setup script:

```bash
# Make the script executable if needed
chmod +x run.sh

# Run the setup script
./run.sh
```

This script will:
- Create a virtual environment
- Install all required dependencies
- Set up the necessary directories
- Start the application on port 5000

Alternatively, you can set up manually:

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the application
export FLASK_APP=app.py
export FLASK_ENV=development
flask run --host=0.0.0.0 --port=5000
```

## Usage

1. Open your web browser and navigate to `http://localhost:5000`
2. On the home page, select one of the three modes:
   - Master Analysis
   - Voice Reproduction
   - Voice Incubation
3. Follow the onboarding instructions for your selected mode
4. Configure your AI provider API key in the API Settings page
5. Complete the workflow forms with your data
6. View and export your results

## Mode-Specific Workflows

### Master Analysis Mode

1. Input text transcript or upload audio file
2. Provide context information about the communication setting
3. Specify analysis objectives (optional)
4. Submit for processing
5. View comprehensive analysis results
6. Export results in your preferred format

### Voice Reproduction Mode

1. Input previous analysis results or manual voice characteristics
2. Specify target content type and format
3. Provide audience and context information
4. Submit for processing
5. View and edit generated content
6. Export content in your preferred format

### Voice Incubation Mode

1. Complete the six-step input process:
   - Entity Foundation
   - Stakeholder Values
   - Psychological Positioning
   - Archetypes
   - Linguistic Style
   - Emotional Expression
2. Submit for processing
3. View the new voice profile and sample content
4. Review implementation guidelines
5. Export the voice guidelines in your preferred format

## AI Provider Configuration

The application supports multiple AI providers:

1. OpenAI
2. Anthropic
3. Cohere
4. Custom Provider

To configure your API provider:
1. Click on "API Settings" in the navigation
2. Select your preferred provider
3. Enter your API key
4. Save the configuration

Your API key is stored securely in your session and not saved on our servers.

## Troubleshooting

- **Application won't start**: Ensure Python 3.8+ is installed and all dependencies are correctly installed
- **API errors**: Verify your API key is correct and has sufficient permissions
- **File upload issues**: Check that the file format is supported and under the size limit (16MB)
- **Export errors**: Ensure the application has write permissions to the directory

## Customization

The application uses a ShadCN-inspired design system with Tailwind CSS. To customize the appearance:

1. Modify the CSS variables in `/static/css/styles.css`
2. Adjust the HTML templates in the `/templates` directory
3. Extend functionality by modifying `app.py`

## License and Attribution

This application was developed by Arcui Usoara and The House of Iaculus. When using this application, please provide appropriate attribution.

For more information, visit:
- [Arcui Usoara on LinkedIn](https://www.linkedin.com/in/arcui-usoara/)
- [The House of Iaculus](https://iaculus.com)
