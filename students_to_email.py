import csv
import pandas as pd
import numpy as np
import json


classes = pd.read_csv(
    '/Users/samforman/Desktop/all_classes_list.csv').to_numpy()
form_responses = pd.read_csv(
    '/Users/samforman/Desktop/all_students.csv').to_numpy()


list_of_students = []

student_existed = False

for row in form_responses:
    for classname in classes:
        if row[2].lower() == classname[0].lower():
            student_obj = [row[0].lower(), row[1].lower()]
            list_of_classes = [row[2].lower()]
            student_obj.append(row[1].lower().split('@')[0])
            student_obj.append(list_of_classes)
            list_of_students.append(student_obj)

student_emails = set(())
final_list = []

first = True
already_in = False
for student in list_of_students:
    name_email = student[1]
    student_emails.add(name_email)


for student in student_emails:
    something_added = False
    first_time = True
    for entry in list_of_students:
        if student == entry[1] and first_time:
            name = entry[0][0].upper() + entry[0][1:]
            student_obj = [str(name), entry[1], entry[2]]
            classes = entry[3]
            student_obj.append(classes)
            final_list.append(student_obj)
            first_time = False
            something_added = True
        elif student == entry[1]:
            final_list[-1][3].append(entry[3][0])
            something_added = True
    if not something_added:
        final_list.append(entry)

with open('students_to_email_1.txt', 'w') as outfile:
    json.dump(final_list, outfile)


with open('findmy-emails.csv', mode='w') as email_file:
    email_writer = csv.writer(
        email_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    email_writer.writerow(
        ["email", "firstname", "uniqname", "message", "messagePlain", "subject"])

    for student_obj in final_list:
        messagePlain = "Hey " + \
            student_obj[0].split(" ", 1)[0] + \
            """, <br><br /> StudyBuddies here! We know it’s been harder than ever to meet people in your classes this semester. <br> <br />
             That's why we recently created https://findmyclassgroup.me/ to help you find the GroupMe's for classes like """

        message = """<html>Hey """ + \
            student_obj[0].split(" ", 1)[0] + \
            """, <br> <br /> StudyBuddies here! We know it&rsquo;s been harder than ever to meet people in your classes this semester. <br> <br />
            That&rsquo;s why we recently created 
            <a href="https://findmyclassgroup.me/?ref=em">findmyclassgroup.me</a> to help you find the GroupMe's for classes like """

        subject = "Join the groupme for "

        for classes in student_obj[3]:

            if len(student_obj[3]) == 1:
                messagePlain += classes.upper().strip()
                message += classes.upper().strip()
                subject += classes.upper().strip()
            elif classes == student_obj[3][-1] and len(student_obj[3]) > 1:
                messagePlain += "and " + classes.upper().strip()
                message += "and " + classes.upper().strip()
                subject += "and " + classes.upper().strip()
            elif len(student_obj[3]) == 2:
                messagePlain += classes.upper().strip() + " "
                message += classes.upper().strip() + " "
                subject += classes.upper().strip() + " "
            else:
                messagePlain += classes.upper().strip() + ", "
                message += classes.upper().strip() + ", "
                subject += classes.upper().strip() + ", "

        message += """ instantly. <br> <br /> Check it out <a href="https://findmyclassgroup.me/">here</a>, and join the rest of your class! <br> <br /> Best, <br /> StudyBuddies </html>"""

        messagePlain += """ instantly. <br> <br /> Check it out here: https://findmyclassgroup.me and join the rest of your class! <br> <br /> Best, <br /> StudyBuddies"""

        email_writer.writerow([student_obj[1], student_obj[0].split(" ", 1)[
            0], student_obj[2], message, messagePlain, subject])
