import re


def extract_yt_term(command):
    # Define a regular expression pattern to capture the song name
    pattern = r'play\s+(.*?)\s+on\s+youtube'
    #Use re.search to find the pattern in the command
    match = re.search(pattern, command, re.IGNORECASE)
    return match.group(1) if match else None